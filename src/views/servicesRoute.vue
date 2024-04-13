<template>
  <div class="services-route">
    <div class="services-route__content">
      <v-card
        class="services-route__content-card"
        variant="text"
      >
        <v-card-text
          v-html="$t('content.services.head')"
          class="services-route__content-card-text"
        />
        <div class="services-route__content-card-services">
          <v-btn
            v-for="(service, key) in services"
            :key="key"
            :class="`services-route__content-card-button services-route__${serivce}`"
            @click="toggleModal(service, true)"
          >
            {{ $t(`content.services.label.${service}`) }}
          </v-btn>
        </div>
        <v-card-text
          v-html="$t('content.services.bottom')"
          class="services-route__content-card-text"
        /> 
      </v-card>
      <hu-portrait
        src="assets/paragraph.png"
        isMirrored
      ></hu-portrait>
    </div>
    <v-dialog
      v-for="(service, key) in services"
      :key="key"
      v-model="modals[service]"
      :class="`services-route__modal-card services-route__${service}`"
      width="auto"
    >
      <!-- Icon -->
      <v-card
        class="services-route__modal-card"
        max-width="1000"
        prepend-icon="mdi-update"
        :title="$t(`content.services.label.${service}`)"
      >
        <template #text>
          <component :is="`hu-services-${service}`"/>
        </template>

        <template #actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="toggleModal(service, false)"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'servicesRoute',

  data() {
    return {
      modals: {
        social: false,
        "tenancy-leasehold": false,
        condominium: false,
        traffic: false,
        labour: false,
      },
    };
  },

  computed: {
    services() {
      return [
        "social",
        "tenancy-leasehold",
        "condominium",
        "traffic",
        "labour",
      ];
    },
  },

  methods: {
    toggleModal(service, state) {
      this.modals[service] = state;
    },
  },
};
</script>

<style lang="scss" scoped>
.services-route {
  display: flex;
  justify-content: center;

  &__content {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;

    &-card {
      text-align: justify;
      width: 60%;

      &-text {
        padding: 0;
      }

      &-services {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0;
      }

      &-button {
        flex: 40%;
        margin: 4px 0;
        text-transform: none;
        color: $color-secondary;
      }
    }
  }
}
</style>
