<template>
    <div class="home-route">
        <div class="home-route__content">
            <hu-portrait src="assets/portrait.jpg" secondarySrc="assets/writing.jpg"/>
            <hu-card class="home-route__content-card">
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </hu-card>
        </div>
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

    &__content {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;

        &-card {
            text-align: justify;
        }
    }
}
</style>
