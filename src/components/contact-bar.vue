<template>
    <div class="contact-bar d-none d-sm-flex">
        <div class="contact-bar__container">
            <div class="contact-bar__phone contact-bar__element">
                <v-icon class="contact-bar__icon">mdi-phone</v-icon>
                <div class="contact-bar__phone-content">
                    <a :href="`tel:${this.$t('general.personalInformation.phone')}`">
                        {{ $t('general.personalInformation.phone') }}
                    </a>
                </div>
            </div>
            <div class="contact-bar__mail contact-bar__element">
                <v-icon class="contact-bar__icon">mdi-email</v-icon>
                <div class="contact-bar__mail-content">
                    <a :href="'mailto://' + $t('general.personalInformation.mail')">
                        {{ $t('general.personalInformation.mail') }}
                    </a>
                </div>
            </div>
            <div class="contact-bar__business-hours contact-bar__element d-none d-md-flex">
                <v-icon class="contact-bar__icon">mdi-calendar-range</v-icon>
                <div class="contact-bar__business-hours-content">
                    {{ $t('contact-bar.businessHours') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactBar',
}
</script>

<style lang="scss" scoped>
.contact-bar {
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

        justify-content: space-between;
        
        color: $color-secondary;
    }

    &__element {
        display: flex;
        overflow: hidden;

        > .contact-bar__icon {
            margin: 0 6px;
        }

        a {
            color: $color-secondary;
            text-decoration: none;
        }
    }
}
</style>
