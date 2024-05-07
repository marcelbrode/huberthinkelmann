<template>
  <div class="home-route">
    <div class="home-route__content">
      <div class="home-route__content-image">
        <img
          src="assets/hubert-title.png"
          alt="Hubert Hinkelmann"
          class="home-route__content-image-src"
        >
      </div>
      <v-card
        class="home-route__content-card"
        variant="text"
      >
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
      max-width: 60%;
      padding: 12px 24px;
    }
    
    &-image-src {
      width: 350px;
      margin-left: 36px;
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
