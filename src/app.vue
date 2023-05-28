<template>
    <v-app>
        <hu-contact-bar/>
        <hu-header
            @update-title="onUpdateTitle"
            @openSidebar="onOpenSidebar"
        />
        <v-main>
            <router-view #default="{ Component }" class="main">
                <transition name="fade" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </v-main>
        <hu-footer/>
        <hu-copyright-bar/>
        <hu-cookie-consent/>
        <hu-sidebar
            :show="showSidebar"
            @close="onCloseSidebar"
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

.main {
    min-height: 75vh;
    background-color: #fff;
    border-radius: 4px;
    margin: 12px 0;
    padding: 24px;
    filter: $drop-shadow;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
    opacity: 0;
}
</style>
