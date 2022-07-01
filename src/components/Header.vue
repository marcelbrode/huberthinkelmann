<template>
    <div class="header">
        <div class="logo"></div>
        <div class="navigation">
            <nav>
                <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #314152;
    color: #fff;

    > div {
        margin: 24px;
    }

    .logo {
        background: url('@/assets/logo.png') no-repeat;
        background-size: 250px 60px;
        width: 250px;
        height: 60px;
    }

    nav a {
        font-weight: bold;
        // color: #2c3e50;
        color: #eee;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
}
</style>