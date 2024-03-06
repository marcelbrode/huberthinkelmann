<template>
  <div class="header">
    <div class="header__container">
      <div class="header__logo" :class="localeClasses" />
      <div class="header__menu header__menu-desktop d-none d-sm-flex">
        <div class="header__language-select">
          <country-flag
            class="header__flag"
            iso="DE"
            @click="updateLanguageLocale('de-DE')"
          />
          <div class="header__separator">|</div>
          <country-flag
            class="header__flag"
            iso="GB"
            @click="updateLanguageLocale('en-GB')"
          />
        </div>
        <nav class="header__navigation header__navigation-desktop">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="header__navigation-link"
          >
            {{ $t(`header.navigation.${route.name}`) }}
          </router-link>
        </nav>
      </div>
      <div class="header__menu header__menu-mobile d-flex d-sm-none">
        <nav class="header__navigation header__navigation-mobile">
          <v-btn
            variant="text"
            size="large"
            icon="mdi-menu"
            @click="onOpenSidebar"
          />
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'Header',

  computed: {
    routes() {
      return router.options.navigationRoutes;
    },

    localeClasses() {
      return [`is--${this.$i18n.locale}`];
    },
  },

  methods: {
    onOpenSidebar() {
      this.$emit('openSidebar');
    },

    updateLanguageLocale(locale = 'de-DE') {
      this.$i18n.locale = locale;

      this.$emit('update-title');
    },
  },
};
</script>

<style lang="scss" scoped>
$logo-sizes: 250px 60px;

.header {
  display: flex;
  justify-content: center;

  background-color: $color-accent;
  color: $color-secondary;
  filter: $drop-shadow;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: $content-max-width;
    margin: 24px;
  }

  &__logo {
    background: url('@/assets/logo.svg') no-repeat;
    background-repeat: no-repeat;
    background-size: $logo-sizes;
    width: 250px;
    height: 60px;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__language-select {
    display: flex;
    justify-content: right;
    gap: 12px;
  }

  &__flag {
    border-radius: 25;

    &:hover {
      cursor: pointer;
    }
  }

  &__separator {
    color: $navigator-font-color;
  }

  &__navigation {
    &-link {
      white-space: nowrap;
    }

    &-mobile {
      scale: 1.7;
    }

    a {
      color: $navigator-font-color;
      transition: color 0.3s ease-in-out;
      padding-left: 12px;
      user-select: none;

      &::after {
        content: "|";
        color: $navigator-font-color;
        padding-left: 12px;
      }

      &:last-child::after {
        content: "";
        padding: 0;
      }

      &.router-link-exact-active {
        color: $navigator-font-color-active;

        &::after {
          color: $navigator-font-color;
        }
      }
    }
  }
}
</style>