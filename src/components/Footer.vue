<template>
    <footer class="footer">
        <div class="footer__container">
            <h1>Footer</h1>
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
    justify-content: space-around;
    align-items: center;

    background-color: $accent;
    color: $color-secondary;

    &__container {
        margin: 24px;
    }
}

</style>