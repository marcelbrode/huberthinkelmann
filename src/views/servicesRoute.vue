<template>
  <div class="services-route">
    <div class="services-route__content">
      <hu-card
        class="services-route__content-card"
        is-wide
      >
        <h1>{{ $t('content.title.services') }}</h1>
        <div>
          <!-- <div
            v-html="$t('content.services')"
            style="margin-bottom: 12px;"
          /> -->
        </div>
      </hu-card>     
      <hu-spacer/> 
      <hu-card
        class="services-route__content-card"
        is-wide
        is-secondary
      >
        <h1>{{ $t('content.title.services') }}</h1>
        <div>
          <!-- <div
            v-html="$t('content.services')"
            style="margin-bottom: 12px;"
          /> -->
        </div>
      </hu-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'servicesRoute',
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
    }
  }
}
</style>
