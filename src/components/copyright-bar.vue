<template>
    <div class="copyright-bar">
        <div class="copyright-bar__container">
            <div class="copyright-bar__content-left">
                <router-link class="copyright-bar__legal-notice copyright-bar__link" to="/legalNotice">
                    {{ $t('header.navigation.legalNotice') }}
                </router-link>
                <router-link class="copyright-bar__cookie-policy copyright-bar__link" to="/cookiePolicy">
                    {{ $t('header.navigation.cookiePolicy') }}
                </router-link>
            </div>
            <div class="copyright-bar__content-right">
                <v-icon class="copyright-bar__creator-icon">mdi-copyright</v-icon>
                <span class="copyright-bar__creator-label">{{ $t('copyright-bar.creatorLabel') }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CopyrightBar',
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
        justify-content: space-between;
        gap: 3px;
    }
    
    &__content-left > &__link:not(:last-child)::after {
        content: "|";
        padding: 6px;
    }

    &__link {
        color: $color-white;
    }
}
</style>
