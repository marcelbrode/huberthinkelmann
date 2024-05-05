<template>
    <v-app>
        <hu-contact-bar/>
        <hu-header
            @open-sidebar="onOpenSidebar"
            @update-title="onUpdateTitle"
        />
        <v-main class="main">
            <router-view #default="{ Component }" class="main__content">
                <transition name="fade" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </v-main>
        <hu-footer/>
        <hu-copyright-bar/>
        <hu-cookie-consent/>
        <hu-overlay
            :show="showSidebar"
            @click="showSidebar=false"
        />
        <hu-sidebar
            :show="showSidebar"
            @close="onCloseSidebar"
            @update-title="onUpdateTitle"
        />
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            showSidebar: false,
        };
    },

    computed: {
        translatedRoute() {
            return this.$t(`header.navigation.${this.$route.name}`);
        }
    },

    watch:{
        $route() {
            this.onUpdateTitle();
        }
    },

    mounted() {
        this.onUpdateTitle();
    },

    methods: {
        onUpdateTitle() {     
            document.title = `${this.translatedRoute} | ${this.$tc('general.title')}`;
        },

        onOpenSidebar() {
            this.showSidebar = true;
        },

        onCloseSidebar() {
            this.showSidebar = false;
        }
    }
}
</script>

<style lang="scss">
@import url('@/assets/_variables.scss');

* {
    margin: 0;
}

a, a:visited, a:active {
    text-decoration: none;
    color: $color-highlight;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $color-accent;
}

.v-main {
    display: flex;
    align-self: center;
    width: $content-max-width;
}

p {
    margin-bottom: 16px;
}

p:last-child {
    margin-bottom: 0;
}

.v-card {
    .v-card-text {
        color: $color-accent;
        overflow: auto;
    }

    .v-card-title, .v-card-subtitle {
        color: $color-accent;
        font-size: 32px;
        font-family: Dortmund, sans-serif;
    }

    .v-card-subtitle {
        font-size: 16px;
        opacity: 1;
    }

    .v-card-item__prepend {
        color: $color-accent;
    }
}

.main {
    display: flex;

    background-color: $color-white;
    border-radius: 4px;

    overflow: hidden;

    &__content {
        display: flex;
        min-height: 75vh;

        overflow: hidden;
    }
}

.v-expansion-panel-text {
    display: block;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
    opacity: 0;
}

@media only screen and (max-width: 400px) {
    #app {
        width: 105vw;
    }
}
</style>
