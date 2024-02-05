<template>
  <div class="about-route">
    <div class="about-route__content">
      <hu-card class="about-route__content-card">
        <h1>{{ $t('content.title.about') }}</h1>
        <div class="about-route__content-card-cv">
          <h3>{{ $t('content.title.aboutTraining') }}</h3>
          <div class="about-route__content-card-cv-bullet">
            <li
              v-for="entry in trainingEntries"
              :key="entry"
            >
              <div
                v-for="column in entry.split(';')"
                :key="column"
              >
                {{ column }}
              </div>
            </li>          
          </div>
          <div class="about-route__content-card-cv-bullet">
            <h3>{{ $t('content.title.aboutPractice') }}</h3>
            <li
              v-for="entry in practiceEntries"
              :key="entry"
            >
              <div
                v-for="column in entry.split(';')"
                :key="column"
              >
                {{ column }}
              </div>
            </li>
          </div>
          <!-- <h3>Berufspraxis</h3> -->
          <!-- <div class="about-route__content-card-cv-bullet">
            <li>
              <div>1997-2000</div>
              <div>Tätigkeit als Rechtsanwalt und Rechtsberater für einen Mieterverein in Dessau</div>
            </li>
            <li>
              <div>Seit 2001</div>
              <div>Selbständig in eigener Kanzlei tätig</div>
            </li>
            <li>
              <div>Seit 2005</div>
              <div>Zulassung als Rechtsanwalt am OLG Hamm</div>
            </li>
            <li>
              <div>Seit 2011</div>
              <div>Fachanwalt für Miet- und WEG-Recht</div>
            </li>
            <li>
              <div>Seit 2014</div>
              <div>Fachanwalt für Sozialrecht</div>
            </li>
          </div> -->
        </div>
      </hu-card>
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

    &-card {
      text-align: justify;

      &-cv {
        display: flex;
        flex-direction: column;
        gap: 12px;

        &-bullet {
          margin-left: 4px;
          // border-left: 1px solid #000;

          > li {
            // border-left: 1px solid #000;
            // transform: translateX(-3px);

            &::marker {
              content: '▶';
              font-size: 18px;
            }

            &:last-child {
              border-left: none;
            }
          }
        }

        li > div {
          display: inline-block;
          width: 90%;
          // transform: translateX(-12px);
          // border-left: 1px solid #000;

          &:first-child {
            font-weight: bold;
          }

          &:not(:first-child) {
            margin-left: 29px;
          }
        }
      }
    }
  }
}
</style>
