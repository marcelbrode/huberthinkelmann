<template>
    <Transition>
        <div v-if="show" class="sidebar">
            <div class="sidebar__header">
                <v-btn
                    class="sidebar__header-button"
                    variant="text"
                    size="x-large"
                    density="comfortable"
                    icon="mdi-chevron-left"
                    @click="onClose"
                />
               <div class="sidebar__header-text">{{ $tc('sidebar.title') }}</div>
            </div>
            <div class="sidebar__content">
                <h1>Hi there</h1>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'sidebar',

    props: {
        show: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data() {
        return {
        };
    },

    methods: {
        onClose() {
            this.$emit('close');
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    overflow: hidden;

    flex-direction: column;

    &__header {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        padding: 24px;
        
        color: $color-secondary;
        background-color: $color-tertiary;

        &-button {
            margin-right: 12px;


        }
        
        &-text {
            font-size: 24px;
        }
    }

    &__content {
        display: flex;
        margin: 24px;
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
