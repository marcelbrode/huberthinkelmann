<template>
    <div class="map">
        <a :href="$t('general.personalInformation.googleMapsLink')" target="_blank">
            <div class="map__content" />
        </a>
    </div>
</template>

<script>
export default {
    name: 'Map',
}
</script>

<style lang="scss" scoped>
.map {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: $color-tertiary;
    color: $color-secondary;

    &__content {
        width: 400px;
        height: 400px;
        background: url('@/assets/googlemaps-dummy.jpg') no-repeat;
        background-size: 400px 400px;
        border-radius: 6px;
    }
}
</style>
