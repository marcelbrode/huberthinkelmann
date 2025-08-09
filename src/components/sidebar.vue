<template>
    <Transition>
        <div v-show="show" class="sidebar">
            <div class="sidebar__header">
                <div class="sidebar__header-title">
                    <v-btn
                        class="sidebar__header-title-button"
                        variant="text"
                        size="x-large"
                        density="comfortable"
                        icon="mdi-chevron-left"
                        @click="onClose"
                    />
                    <div class="sidebar__header-title-text">{{ $tc('sidebar.title') }}</div>
                </div>
                <div class="sidebar__header-language">
                    <country-flag
                        class="sidebar__header-language-flag"
                        country="de"
                        @click="updateLanguageLocale('de-DE')"
                    />
                    <country-flag
                        class="sidebar__header-language-flag"
                        country="gb"
                        @click="updateLanguageLocale('en-GB')"
                    />
                </div>
            </div>
            <div class="sidebar__content">
                <nav class="sidebar__navigation sidebar__navigation-mobile">
                    <router-link
                        v-for="route in routes"
                        :key="route.path"
                        :to="route.path"
                        class="sidebar__navigation-link"
                    >
                        {{ $t(`header.navigation.${route.name}`) }}
                    </router-link>
                </nav>
                <hu-contact-info class="sidebar__contact-info"/>
            </div>
        </div>
    </Transition>
</template>

<script>
import router from '@/router';

export default {
    name: 'sidebar',

    props: {
        show: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    computed: {
        routes() {
            return router.options.navigationRoutes;
        },
    },

    watch:{
        $route(to, from) {
            if (this.show && to !== from) {
                window.scrollTo(0, 0);
            }

            this.$emit('close');
        }
    },

    methods: {
        onClose() {
            this.$emit('close');
        },

        updateLanguageLocale(locale = 'de-DE') {
            this.$i18n.locale = locale;

            this.$emit('update-title');
        },
    }
};
</script>

<style lang="scss" scoped>

$sidebar-border-style: 1px solid $color-tertiary;
.sidebar {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: fit-content;
    overflow: hidden;

    background-color: rgba(#000, 0.2);
    flex-direction: column;
    backdrop-filter: blur(5px);

    &__header {
        display: flex;
        align-items: center;
        background-color: $color-tertiary;
        padding: 24px;

        &-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            
            color: $color-secondary;
            background-color: $color-tertiary;

            &-button {
                margin-right: 12px;
                scale: 1.7;
            }
            
            &-text {
                font-size: 24px;
            }
        }

        &-language {
            display: flex;
            flex-direction: row;
            height: 36px;
            gap: 34px;
            justify-content: flex-end;
            translate: -6px -2px;

            &-flag {
                padding: 0 18px;
                scale: 1.4;
            }
        }
    }

    &__header, &__content {
        background-color: $color-tertiary;
    }

    &__navigation {
        display: flex;
        flex-direction: column;

        width: 100%;

        &-link {
            width: 100%;
            padding: 24px;
            color: $color-tertiary;
            border-bottom: $sidebar-border-style;

            font-size: 24px;
            background-color: $color-white;

            &:first-child {
                border-top: $sidebar-border-style;
            }
            
            &.router-link-exact-active {
                color: $color-white;
                background-color: lighten($navigator-font-color-active, 0%);
            }
        }
    }

    &__contact-info {
        margin-top: 24px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

</style>
