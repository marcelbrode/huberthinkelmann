<template>
    <div class="cookie-consent">
        <div class="cookie-consent__content">
            <div class="cookie-consent__legal d-flex flex-column justify-center flex-grow-3 flex-shrink-3">
                <p class="cookie-consent__legal-text font-weight-bold">{{ $t('cookie-consent.content') }}</p>
                <router-link class="cookie-consent__legal-link" to="/">{{ $t('cookie-consent.moreInformationLink') }}</router-link>
            </div>
            <div class="cookie-consent__actions d-flex justify-center flex-column flex-md-row">
                <v-btn class="cookie-consent_actions-decline ma-2" color="secondary">{{ $t('general.decline') }}</v-btn>
                <v-btn class="cookie-consent_actions-accept ma-2" >{{ $t('general.accept') }}</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CookieConsent",
    components: {
    }
}
</script>

<style lang="scss" scoped>
$outer-margin: 24px;
$border: 0;
$border-radius: 10px;

.cookie-consent {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    flex-direction: row;

    &__content {
        display: flex;
        width: 100%;
        margin: $outer-margin;
        padding: 36px 24px;

        justify-content: space-between;
        
        border: $border;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 10px rgba(0,0,0,.08))
                drop-shadow(0 2px 10px rgba(0,0,0,.06))
                drop-shadow(0 1px 10px rgba(0,0,0,.1));
        background-color: $background-color;
    }
}
</style>
