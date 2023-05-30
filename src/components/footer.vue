<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <div class="footer__contact">
                    <div class="footer__contact-title footer__contact-item">
                        <h3>{{ $t('general.personalInformation.title') }}</h3>
                    </div>
                    <div class="footer__contact-address footer__contact-item">
                        <v-icon class="contact-bar__icon">mdi-map-marker</v-icon>
                        <span class="contact-bar__label">
                            {{ $t('general.personalInformation.address') }}
                        </span>
                    </div>
                    <div class="footer__contact-phone footer__contact-item">
                        <v-icon class="contact-bar__icon">mdi-phone</v-icon>
                        <span class="contact-bar__label">
                            <a :href="`tel:${$t('general.personalInformation.phone')}`">
                                {{ $t('general.personalInformation.phone') }}
                            </a>
                        </span>
                    </div>
                    <div class="footer__contact-fax footer__contact-item">
                        <v-icon class="contact-bar__icon">mdi-fax</v-icon>
                        <span class="contact-bar__label">
                            <a :href="`tel:${$t('general.personalInformation.phone')}`">
                                {{ $t('general.personalInformation.fax') }}
                            </a>
                        </span>
                    </div>
                    <div class="footer__contact-mail footer__contact-item">
                        <v-icon class="contact-bar__icon">mdi-email</v-icon>
                        <span class="contact-bar__label">
                            <a :href="`mailto:${$t('general.personalInformation.phone')}`">
                                {{ $t('general.personalInformation.mail') }}
                            </a>
                        </span>
                    </div>
                </div>
                <div class="footer__business-hours">
                    <div class="footer__business-hours-title footer__business-hours-item">
                        <h3>{{ $t('footer.businessHoursLabel') }}</h3>
                    </div>                    
                    <div class="footer__business-hours-title footer__business-hours-item">
                        <v-icon class="contact-bar__icon">mdi-calendar-range</v-icon>
                        <span>{{ $t('general.personalInformation.businessHours') }}</span>
                    </div>
                </div>
            </div>
            <div class="footer__content">
                <a :href="$t('general.personalInformation.googleMapsLink')" target="_blank">
                    <div class="footer__map" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: $color-tertiary;
    color: $color-secondary;

    &__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

        width: $content-max-width;
        margin: 24px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        white-space: pre-line;
        width: 400px;
        gap: 24px;
    }

    &__contact, &__business-hours {
        display: flex;
        flex-direction: column;

        &-item {
            display: flex;
            gap: 6px;
            margin: 3px 0;
        }
    }

    &__map {
        width: 400px;
        height: 400px;
        background: url('@/assets/googlemaps-dummy.jpg') no-repeat;
        background-size: 400px 400px;
        border-radius: 6px;
    }
}

@media only screen and (max-width: 1000px) {
    .footer {
        &__container {
            width: 100vw;
            gap: 24px;
        }
    }
}

</style>