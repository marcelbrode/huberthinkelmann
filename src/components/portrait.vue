<template>
    <div class="portrait">
        <div class="portrait__decoration"></div>
        <img
            class="portrait__main"
            :src="src"
        />
        <img
            v-if="secondarySrc"
            class="portrait__secondary-image"
            :src="secondarySrc"
        />
    </div>
</template>

<script>
export default {
    name: 'Portrait',

    props: {
        src: {
            type: String,
            required: true
        },

        secondarySrc: {
            type: String,
            required: false,
            default: null,
        }
    }
}
</script>

<style lang="scss" scoped>
.portrait {
    position: relative;
    height: 550px;
    width: 400px;

    overflow: hidden;

    // ToDo: Remove after debug
    // border: 2px solid black;

    &__decoration {
        position: absolute;
        width: 300px;
        height: 300px;
        rotate: 225deg;
        left: -125px;
        top: -125px;

        border: 150px solid transparent;
        border-left: 150px solid $color-accent;
        
        border-bottom: 1;
    }
    
    &__main {
        position: absolute;
        height: 450px;
        width: 300px;
        margin: 48px;

        object-fit: cover;

        border: 8px solid $color-white;
    }
    
    &__secondary-image {
        position: absolute;
        height: 150px;
        width: 225px;
        bottom: 25px;
        right: 25px;

        object-fit: cover;

        border: 4px solid $color-white;
    }
}
</style>
