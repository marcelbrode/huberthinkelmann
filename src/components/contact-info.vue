<template>
    <div class="contact-info">
        <div class="contact-info__container">
            <div class="contact-info__content">
                <div class="contact-info__contact">
                    <div class="contact-info__contact-title contact-info__contact-item">
                        <h3>{{ $t('general.personalInformation.title') }}</h3>
                    </div>
                    <div class="contact-info__contact-address contact-info__contact-item">
                        <v-icon class="contact-bar__icon">mdi-map-marker</v-icon>
                        <span class="contact-bar__label">
                            {{ $t('general.personalInformation.address') }}
                        </span>
                    </div>
                    <div class="contact-info__contact-phone contact-info__contact-item">
                        <v-icon class="contact-bar__icon">mdi-phone</v-icon>
                        <span class="contact-bar__label">
                            <a :href="`tel:${$t('general.personalInformation.phone')}`">
                                {{ $t('general.personalInformation.phone') }}
                            </a>
                        </span>
                    </div>
                    <div class="contact-info__contact-fax contact-info__contact-item">
                        <v-icon class="contact-bar__icon">mdi-fax</v-icon>
                        <span class="contact-bar__label">
                            <a :href="`fax:${$t('general.personalInformation.fax')}`">
                                {{ $t('general.personalInformation.fax') }}
                            </a>
                        </span>
                    </div>
                    <div class="contact-info__contact-mail contact-info__contact-item">
                        <v-icon class="contact-bar__icon">mdi-email</v-icon>
                        <span class="contact-bar__label">
                            <a :href="`mailto:${$t('general.personalInformation.mail')}`">
                                {{ $t('general.personalInformation.mail') }}
                            </a>
                        </span>
                    </div>
                </div>
                <div class="contact-info__business-hours">
                    <div class="contact-info__business-hours-title contact-info__business-hours-item">
                        <h3>{{ $t('footer.businessHoursLabel') }}</h3>
                    </div>                    
                    <div class="contact-info__business-hours-title contact-info__business-hours-item">
                        <v-icon class="contact-bar__icon">mdi-calendar-range</v-icon>
                        <span>{{ $t('general.personalInformation.businessHours') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContactInfo',
}
</script>

<style lang="scss" scoped>
.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    color: $color-secondary;
    background-color: $color-tertiary;

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
}

@media only screen and (max-width: 1000px) {
    .contact-info {
        &__container {
            width: 100vw;
            gap: 24px;
        }
    }
}

</style>