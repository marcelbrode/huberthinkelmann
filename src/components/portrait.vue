<template>
    <div class="portrait" :class="classes">
        <div class="portrait__decoration"></div>
        <img
            class="portrait__main"
            :class="classes"
            :src="src"
        />
        <img
            v-if="secondarySrc"
            class="portrait__secondary-image"
            :class="classes"
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
        },

        isMirrored: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    computed: {
        classes() {
            return {
                'is--mirrored': this.isMirrored,
            };
        },
    },
}
</script>

<style lang="scss" scoped>
.portrait {
    position: relative;
    height: 550px;
    width: 400px;

    overflow: hidden;

    &.is--mirrored {
        transform: scaleX(-1);
    }

    &__decoration {
        position: absolute;
        width: 300px;
        height: 300px;
        rotate: 225deg;
        left: -125px;
        top: -125px;

        border: 150px solid transparent;
        border-left: 150px solid $color-highlight;
        
        border-bottom: 1;
    }
    
    &__main {
        position: absolute;
        height: 450px;
        width: 300px;
        margin: 48px;

        object-fit: cover;
        border: 8px solid $color-white;

        &.is--mirrored {
            transform: scaleX(-1);
        }
    }
    
    &__secondary-image {
        position: absolute;
        height: 150px;
        width: 225px;
        bottom: 25px;
        right: 25px;

        object-fit: cover;
        border: 4px solid $color-white;

        &.is--mirrored {
            transform: scaleX(-1);
        }
    }
}
</style>
