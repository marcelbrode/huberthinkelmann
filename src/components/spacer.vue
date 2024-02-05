<template>
    <div class="spacer"></div>
</template>

<script>
export default {
    name: 'Spacer',
}
</script>

<style lang="scss" scoped>
.spacer {
    position: relative;
    width: 80%;
    background-color: $color-primary;
    height: 20px;
    margin: 20px 0;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        border-top: 20px solid white;
        border-left: 20px solid $color-tertiary;
    }

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 20px solid white;
        border-right: 20px solid $color-tertiary;
        
    }
}
</style>
