import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Reasons from "./components/ReasonsForHiring"
import BowlingCalculator from "./components/BowlingCalculator"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Reasonsforhiringme",
      name: "reasons",
      component: Reasons
    },
    {
      path: "/BowlingCalculator",
      name: "bowlingcalculator",
      component: BowlingCalculator
    }

  ]
});
