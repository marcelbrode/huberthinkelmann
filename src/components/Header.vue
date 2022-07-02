<template>
    <div class="header">
        <div class="header__logo"/>
        <nav class="header__navigation">
            <router-link
                v-for="route in routes"
                :key="route.path"
                :to="route.path"
                class="header__navigation-link"
            >{{ $t(`header.navigation.${route.name}`) }}</router-link>
        </nav>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: 'App',

    computed: {
        routes() {
            return router.getRoutes();
        }
    }
}
</script>

<style lang="scss" scoped>
$navigator-font-color: #eee;
$navigator-font-color-active: $highlight;

.header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: $accent;
    color: #fff;

    filter: drop-shadow(0 1px 10px rgba(0,0,0,.08))
            drop-shadow(0 2px 10px rgba(0,0,0,.06))
            drop-shadow(0 1px 10px rgba(0,0,0,.1));


    > div {
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
        font-weight: bold;

        &::after {
            content: "|";
            padding: 0 24px;
        }

        &:last-child::after {
            content: "";
        }

        &.router-link-exact-active {
            color: $navigator-font-color-active;

            &:after {
                color: $navigator-font-color;
            }
        }
    }

    nav > .nav-element::after {
        content: "|";
        padding-left: 24px;
    }

    nav > .nav-element:last-child::after {
        content: "";
    }
}
</style>