<template>
    <div class="copyright-bar">
        <div class="copyright-bar__container">
            <v-icon class="copyright-bar__icon">mdi-copyright</v-icon>
            <span class="copyright-bar__label">{{ $t('copyright-bar.label') }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CopyrightBar"
}
</script>

<style lang="scss" scoped>
.copyright-bar {
    display: flex;
    background-color: darken($color-highlight, 10%);
    height: 32px;
    
    justify-content: center;
    align-content: bottom;

    &__container {
        display: flex;
        margin: 0 6px;
        padding-top: 6px;
        font-size: 14px;
        width: $content-max-width;

        color: $color-secondary;
        justify-content: right;
        gap: 3px;
    }
}
</style>
