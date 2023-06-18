<template>
    <Transition>
        <div
            v-if="showConsentModal"
            class="cookie-consent"
        >
            <div class="cookie-consent__content">
                <div class="cookie-consent__legal d-flex flex-column justify-center flex-grow-3 flex-shrink-3">
                    <p class="cookie-consent__legal-text font-weight-bold">
                        {{ $t('cookie-consent.content') }}
                    </p>
                    <router-link
                        class="cookie-consent__legal-link"
                        to="/cookiePolicy"
                    >
                        {{ $t('cookie-consent.moreInformationLink') }}
                    </router-link>
                </div>
                <div class="cookie-consent__actions d-flex justify-center flex-column flex-md-row">
                    <v-btn
                        class="cookie-consent_actions-decline ma-2"
                        color="secondary"
                        @click="onDecline"
                    >
                        {{ $t('general.decline') }}
                    </v-btn>
                    <v-btn
                        class="cookie-consent_actions-accept ma-2"
                        @click="onConfirm"
                    >
                        {{ $t('general.accept') }}
                    </v-btn>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'CookieConsent',

    data() {
        return {
            showConsentModal: false,
        };
    },

    mounted() {
        this.mountedComponent();
    },

    methods: {
        mountedComponent() {
            this.showConsentModal = !localStorage.grantedCookieConsent;
        },

        onConfirm() {
            localStorage.grantedCookieConsent = true;
            this.showConsentModal = false;
        },

        onDecline() {
            localStorage.grantedCookieConsent = false;
            this.showConsentModal = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.cookie-consent {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    flex-direction: row;

    &__content {
        display: flex;
        width: 100%;
        margin: 24px;
        padding: 36px 24px;

        background-color: $color-background;
        justify-content: space-between;

        border-radius: 12px;
        filter: $drop-shadow;
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
