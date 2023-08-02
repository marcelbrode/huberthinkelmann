<template>
    <Transition name="fade">
        <div v-if="show" class="overlay"/>
    </Transition>
</template>

<script>
export default {
    name: 'Overlay',

    props: {
        show: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
}
</script>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(6px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
