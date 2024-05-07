<template>
    <Transition>
        <div
            v-if="showConsentModal"
            class="cookie-consent"
        >
            <div class="cookie-consent__content">
                <div class="cookie-consent__content-legal">
                    <div class="cookie-consent__content-legal-content">
                        <v-icon size="x-large">mdi-cookie</v-icon>
                        
                        <p class="cookie-consent__content-legal-content-text">
                            {{ $t('cookie-consent.content') }}
                        </p>
                    </div>
                    <router-link
                        class="cookie-consent__content-legal-link"
                        to="/copyright"
                    >
                        {{ $t('cookie-consent.moreInformationLink') }}
                    </router-link>
                </div>
                <div class="cookie-consent__content-actions">
                    <v-btn
                        class="cookie-consent__actions-accept ma-2"
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
    },
};
</script>

<style lang="scss" scoped>
.cookie-consent {
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    justify-content: center;

    flex-direction: row;

    &__content {
        display: flex;
        height: fit-content;
        width: $content-max-width;
        margin: 24px;
        padding: 36px 24px;

        background-color: $color-background;
        justify-content: space-between;
        align-items: center;

        border-radius: 12px;
        box-shadow: $box-shadow;

        &-legal {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-grow: 3;
            gap: 12px;

            &-icon {
                display: flex;
                height: 100%;
            }

            &-content {
                display: flex;
                flex-direction: row;
                gap: 12px;

                &-text {
                    font-weight: bolder;
                }
            }

            &-link {
                margin-left: 44px;
            }
        }

        &-actions {
            color: $color-white;
        }
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
