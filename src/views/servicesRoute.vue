<template>
  <div class="services-route">
    <div class="services-route__content">
      <v-card
        class="services-route__content-card"
        variant="text"
      >
        <v-card-title class="services-route__content-card-title">
          {{ $t('content.title.services') }}
        </v-card-title>
        <v-card-text
          v-html="$t('content.services.head')"
          class="services-route__content-card-text"
        />
        <div class="services-route__content-card-services">
          <v-btn
            v-for="(service, key) in services"
            :key="key"
            :class="`services-route__content-card-button services-route__${service.name}`"
            @click="toggleModal(service.name, true)"
          >
            {{ $t(`content.services.label.${service.name}`) }}
          </v-btn>
        </div>
        <v-card-text
          v-html="$t('content.services.bottom')"
          class="services-route__content-card-text"
        /> 
      </v-card>
      <div class="services-route__content-image">
        <img
          src="assets/justitia.png"
          alt="Justitia"
          class="services-route__content-image-src"
        >
      </div>
    </div>
    <v-dialog
      v-for="(service, key) in services"
      :key="key"
      v-model="modals[service.name]"
      :class="`services-route__modal-card services-route__${service.name}`"
      width="auto"
    >
      <v-card
        class="services-route__modal-card"
        max-height="750"
        max-width="1000"
        color="secondary"
        :prepend-icon="service.icon"
      >
        <template #title>
          <v-title class="text-wrap text-left">
            {{ $t(`content.services.label.${service.name}`) }}
          </v-title>
        </template>

        <template #text>
          <component :is="`hu-services-${service.name}`"/>
        </template>

        <template #actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="toggleModal(service.name, false)"
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
      return [{
        name: "social",
        icon: "mdi-account-multiple"
      }, {
        name: "tenancy-leasehold",
        icon: "mdi-land-plots-marker"
      }, {
        name: "traffic",
        icon: "mdi-traffic-light"
      }, {
        name: "labour",
        icon: "mdi-briefcase"
      }, {
        name: "condominium",
        icon: "mdi-city-variant"
      }];
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
      max-width: 80%;

      &-title {
        padding: 8px 0 24px;
      }

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

    &-card-button {
      flex: 40%;
      margin: 4px 0;
      text-transform: none;
      color: $color-secondary;
    }

    &-card {
      max-width: 60%;
      padding: 12px 24px;
    }

    &-image-src {
      width: 350px;
      margin-left: 36px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .services-route {
    &__content {
      &-card-button {
        flex: 100%;
      }

      &-card {
        max-width: unset;
      }

      &-image-src {
        margin-left: unset;
      }
    }
  }
}
</style>
