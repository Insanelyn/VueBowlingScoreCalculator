<template>
  <div id="app">
      <page-header></page-header>
      <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue"
import BowlingCalculator from "./components/BowlingCalculator.vue";

export default {
  name: "app",
  components: {
    PageHeader,
    BowlingCalculator,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
