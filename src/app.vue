<template>
  <v-app>
    <hu-contact-bar/>
    <hu-header/>
    <v-main>
      <router-view #default="{ Component }" class="main">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </v-main>
    <hu-footer/>
    <hu-cookie-consent/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('@/assets/_variables.scss');

* {
  margin: 0;
}

a, a:visited, a:active {
  text-decoration: none;
  color: $highlight;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $accent;
}

.v-main {
  display: flex;
  align-self: center;
  width: $content-max-width;
}

.main {
  min-height: 70vh;
  border: 1px solid black;
  // padding: 40px;
  // border-radius: 12px;
  // margin: 20px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
