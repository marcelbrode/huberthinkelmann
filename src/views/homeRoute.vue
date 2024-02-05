<template>
  <div class="home-route">
    <div class="home-route__content">
      <hu-portrait src="assets/office.jpg" secondarySrc="assets/writing.jpg"/>
      <hu-card class="home-route__content-card">
        <h1>{{ $t('content.title.home') }}</h1>
        <div>
          <div
            v-html="$t('content.home')"
            style="margin-bottom: 12px;"
          />
        </div>
      </hu-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRoute',
};
</script>

<style lang="scss" scoped>
.home-route {
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
