<template>
  <div class="home">
<!--     <img alt="Vue logo" src="../assets/logo.png" />
 -->    <BowlingCalculator msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import BowlingCalculator from "@/components/BowlingCalculator.vue";

export default {
  name: "home",
  components: {
    BowlingCalculator
  }
};
</script>
