<template>
    <footer class="footer">
        <div>
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
    color: #fff;

    > div {
        margin: 24px;
    }
}

</style>