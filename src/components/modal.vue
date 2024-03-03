<template>
  <div class="modal">
    <v-dialog width="1500">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          class="modal__button"
        >
          {{ buttonLabel }}
        </v-btn>
      </template>
      <template #default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            <slot></slot>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :text="$t('general.close')"
              @click="isActive.value = false"
            />
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    buttonLabel: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.modal {
  &__button {
    width: 300px;
    height: 60px;
    margin: 12px;
  }
}
</style>
