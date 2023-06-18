<template>
    <div class="home-route">
        <img class="home-route__card-image" src="title.jpg" />
    </div>
</template>

<script>
export default {
    name: 'homeRoute',
};
</script>

<style lang="scss" scoped>
.home-route {
    display: flex;
    justify-content: center;

    &__card-image {
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}
</style>
