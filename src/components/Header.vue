<template>
    <div class="header">
        <div class="header__container">
            <div class="header__logo"/>
            <nav class="header__navigation header__navigation-desktop d-none d-sm-flex">
                <router-link
                    v-for="route in routes"
                    :key="route.path"
                    :to="route.path"
                    class="header__navigation-link"
                >
                    {{ $t(`header.navigation.${route.name}`) }}
                </router-link>
            </nav>
            <nav class="header__navigation header__navigation-mobile d-flex d-sm-none">
                <v-btn
                    variant="text"
                    size="large"
                    icon="mdi-menu"
                    @click="onSidebarMenuOpen"
                />
            </nav>
        </div>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: 'App',

    data() {
        return {
            showSidebar: false,      
        };
    },

    computed: {
        routes() {
            return router.getRoutes();
        },
    },

    methods: {
        onSidebarMenuOpen() {
            this.showSidebar = true;
        },

        onSidebarMenuClose() {
            this.showSidebar = false;
        },
    },
}
</script>

<style lang="scss" scoped>
$navigator-font-color: $color-secondary;
$navigator-font-color-active: $highlight;

.header {
    display: flex;
    justify-content: center;

    background-color: $accent;
    color: $color-secondary;
    filter: $drop-shadow;

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: $content-max-width;
        margin: 24px;
    }

    &__logo {
        background: url('@/assets/logo.png') no-repeat;
        background-size: 250px 60px;
        width: 250px;
        height: 60px;
    }

    &__navigation a {
        color: $navigator-font-color;
        transition: color 0.3s ease-in-out;
        // font-weight: bold;

        &::after {
            content: "|";
            color: $navigator-font-color;
            padding: 0 24px;
        }

        &:last-child::after {
            content: "";
            padding: 0;
        }

        &.router-link-exact-active {
            color: $navigator-font-color-active;

            &::after {
                color: $navigator-font-color;
            }
        }
    }
}
</style>