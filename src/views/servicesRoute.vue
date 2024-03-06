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
            v-for="(service, key) in services"
            :key="key"
            :title="$t(`content.services.label.${service}`)"
          >
            <template #text>
              <component :is="`hu-services-${service}`"/>
            </template>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-card-text
          v-html="$t('content.services.bottom')"
        /> 
      </v-card>
      <hu-portrait
        src="assets/paragraph.png"
        isMirrored
      ></hu-portrait>
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
        "tenancy-leasehold",
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

    &-card {
      text-align: justify;
      width: 50%;
    }
  }
}
</style>
