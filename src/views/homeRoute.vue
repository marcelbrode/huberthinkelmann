<template>
  <div class="home-route">
    <div class="home-route__content">
      <hu-portrait src="assets/office.jpg" secondarySrc="assets/writing.jpg"/>
      <v-card class="home-route__content-card">
        <v-card-title>{{ $t('content.title.home') }}</v-card-title>
        <v-card-subtitle>{{ $t('content.subtitle.home') }}</v-card-subtitle>
        <v-card-text v-html="$t('content.home')"></v-card-text>
      </v-card>
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
      max-width: 50%;
      padding: 12px 24px;
      text-align: justify;
      background-color: lighten($color-accent, 10%);
    }
  }

  .v-card-title, .v-card-subtitle {
    white-space: pre-wrap;
  }
}

@media only screen and (max-width: 1000px) {
  .home-route {
    &__content-card {
      max-width: 80%;
    }
    .v-card-text, .v-card-title, .v-card-subtitle {
      padding: 0;
      padding-bottom: $spacer-md;
    }
  }
}
</style>
