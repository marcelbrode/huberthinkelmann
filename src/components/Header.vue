<template>
    <div class="header">
        <div class="header__logo"/>
        <nav class="header__navigation">
            <router-link
                v-for="route in routes"
                :key="route.path"
                :to="route.path"
                class="header__navigation-link"
            >{{ route.name }}</router-link>
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
$navigator-font-color-active: #42b983;

.header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #314152;
    color: #fff;

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
        font-weight: bold;
        text-decoration: none;
        color: $navigator-font-color;

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

    &__navigation-link {
        text-transform: capitalize;
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