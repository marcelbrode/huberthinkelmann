<template>
  <div class="about-route">
    <div class="about-route__content">
      <v-card
        class="about-route__content-card"
        variant="text"
      >
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
            </v-list-item>
          </v-list>
        </div>
        <div class="about-route__content-card-practice about-route__content-section">
          <v-card-subtitle>{{ $t('content.title.aboutPractice') }}</v-card-subtitle>
          <v-list lines="two">
            <v-list-item
              v-for="entry in practiceEntries"
              :key="entry"
              class="about-route__content-card-entry"
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
      <div class="about-route__content-image">
        <img
          src="assets/hubert-office.png"
          alt="Portrait"
          class="about-route__content-image-src"
        >
      </div>
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

    &-card-entry {
      color: $color-accent;
    }
    
    &-section {
      border-left: 2px solid $color-highlight;
      padding: 0;
      margin: $spacer-xl $spacer-sm;
    }

    &-image-src {
      width: 350px;
      margin-left: 36px;
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

    &__content-image-src {
      margin-left: unset;
    }
  }
}
</style>
