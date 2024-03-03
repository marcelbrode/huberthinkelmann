<template>
  <div class="services-route">
    <div class="services-route__content">
      <v-card class="services-route__content-card">
        <v-card-text
          v-html="$t('content.services.head')"
        />
        <v-expansion-panels
          variant="accordion"
          class="center-block services-route__content-card-accordion"
        >
          <v-expansion-panel
            v-for="i in 3"
            :key="i"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            title="Item"
            style="background-color: hotpink;"
          ></v-expansion-panel>
        </v-expansion-panels>
        <v-card-text
          v-html="$t('content.services.bottom')"
        /> 
      </v-card>
      <!-- <hu-card
        class="services-route__content-card"
        is-wide
      >
        <h1>{{ $t('content.title.services') }}</h1>
        <div>
          <div
            v-html="$t('content.services.head')"
            style="margin-bottom: 12px;"
          />
          <div class="services-route__content-card-services">
            <hu-modal
              v-for="service in services"
              :key="service"
              class="services-route__content-card-services-modal"
              :button-label="$t(`content.services.label.${service}`)"
            >
              {{ $t(`content.services.content.${service}`) }}
            </hu-modal>
          </div>
          <div
            v-html="$t('content.services.bottom')"
            style="margin-bottom: 12px;"
          /> 
        </div>
      </hu-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'servicesRoute',

  computed: {
    services() {
      return [
        "social",
        "tenancyLeasehold",
        "condominium",
        "traffic",
        "labour",
      ];
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

    // &-card {
    //   text-align: justify;

    //   &-services {
    //     display: flex;
    //     justify-content: space-around;
    //     flex-wrap: wrap;

    //     &-modal {
    //       // min-width: 300px;
    //       // background-color: hotpink;
    //       // color: hotpink;
    //     }
    //   }
    // }
  }
}
</style>
