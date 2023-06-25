<template>
    <div class="card">
        <div class="card__decoration is--top"></div>
        <div class="card__decoration is--bottom"></div>
        <div class="card__content-wrapper"> 
            <div class="card__content"> 
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    height: 550px;
    width: 400px;

    overflow: hidden;

    // ToDo: Remove after debug
    // border: 2px solid black;

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
        height: 450px;

        &-wrapper {
            position: absolute;
            height: 450px;
            width: 300px;
            margin: 48px;

            border: 8px solid $color-white;
            background-color: $color-white;

            overflow: hidden;
        }
    }
}
</style>
