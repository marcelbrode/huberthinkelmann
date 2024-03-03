<template>
  <div class="about-route">
    <div class="about-route__content">
      <v-card class="about-route__content-card">
        <v-card-title>{{ $t('content.title.about') }}</v-card-title>
        <div class="about-route__content-card-training about-route__content-section">
          <v-card-subtitle>{{ $t('content.title.aboutTraining') }}</v-card-subtitle>
          <v-list lines="two">
            <v-list-item
              v-for="entry in trainingEntries"
              :key="entry"
              class="about-route__content-card-entry"
              :title="entry.split(';')[1]"
              :subtitle="entry.split(';')[0]"
            >
              <template v-slot:title="{ title }">
                <div v-html="title" class="text-wrap text-left"></div>
              </template>
            </v-list-item>
          </v-list>
        </div>
        <div class="about-route__content-card-practice about-route__content-section">
          <v-card-subtitle>{{ $t('content.title.aboutPractice') }}</v-card-subtitle>
          <v-list lines="two">
            <v-list-item
              v-for="entry in practiceEntries"
              :key="entry"
              :title="entry.split(';')[1]"
              :subtitle="entry.split(';')[0]"
            >
              <template #title="{ title }">
                <div v-html="title" class="text-wrap text-left"></div>
              </template>
            </v-list-item>
          </v-list>
        </div>
      </v-card>
      <hu-portrait
        src="assets/portrait.jpg"
        is-mirrored
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutRoute',

  computed: {
    trainingEntries() {
      return this.$t('content.aboutTraining').split('|');
    },

    practiceEntries() {
      return this.$t('content.aboutPractice').split('|');
    },
  },
};
</script>

<style lang="scss" scoped>
.about-route {
  display: flex;
  justify-content: center;

  &__content {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    white-space: pre-wrap;

    &-card {
      max-width: 50%;
      padding: $spacer-md $spacer-xl;
      text-align: justify;
      background-color: lighten($color-accent, 10%);
    }
    
    &-section {
      border-left: 2px solid $color-highlight;
      padding: 0;
      margin: $spacer-xl $spacer-sm;
    }
  }

  .v-list {
    background-color: transparent;
  }
}

@media only screen and (max-width: 1000px) {
  .about-route {
    &__content-card {
      max-width: 80%;
    }
    .v-card-text {
      padding: 0;
      padding-bottom: $spacer-md;
    }
  }
}
</style>
