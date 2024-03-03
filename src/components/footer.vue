<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__content">
                <hu-contact-info/>
            </div>
            <hu-map/>
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

@media screen and (max-width: 1000px) {
    .footer {
        &__container {
            width: 100vw;
            gap: 24px;
        }
    }
}

</style>