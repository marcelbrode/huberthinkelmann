<template>
    <div class="card" :class="classes">
        <div class="card__decoration is--top"></div>
        <div class="card__decoration is--bottom"></div>
        <div class="card__content-wrapper" :class="classes"> 
            <div class="card__content"> 
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',

    props: {
        isWide: {
            type: Boolean,
            required: false,
            default: false,
        },

        isSecondary: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    computed: {
        classes() {
            return {
                'is--wide': this.isWide,
                'is--secondary': this.isSecondary,
            };
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    height: 750px;
    width: 550px;

    overflow: hidden;
    &.is--wide {
        width: 1100px;
    }

    &.is--secondary {
        // background-color: green;
    }

    &__decoration {
        position: absolute;
        width: 50px;
        height: 50px;

        border: 50px solid transparent;
        border-left: 50px solid $color-accent;

        &.is--top {
            rotate: 225deg;
            left: -15px;
            top: -15px;
        }

        &.is--bottom {
            rotate: 45deg;
            right: -10px;
            bottom: -10px;
        }
    }
    
    &__content {
        height: 475px;
        padding: 0 8px;

        &-wrapper {
            position: absolute;
            height: 650px;
            width: 450px;
            margin: 48px;

            border: 8px solid $color-white;
            background-color: $color-white;

            overflow: hidden;
        
            &.is--wide {
                width: 1000px;
            }
        }
    }
}
</style>
