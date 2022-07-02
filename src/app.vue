<template>
  <v-app>
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

.main {
  min-height: 70vh;
  padding: 40px;
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
