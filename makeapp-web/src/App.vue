<template>
  <div id="app">
    <nav-bar-component></nav-bar-component>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import NavBarComponent from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBarComponent,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
}

html, body
{
  margin: 0;
  padding: 0;
}
</style>
