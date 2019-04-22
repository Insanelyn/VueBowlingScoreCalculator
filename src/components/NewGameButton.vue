<template>
  <div>
    <button class="NewGameButton">New Game</button>
  </div>
</template>

<script>
export default {
  name: "NewGameButton",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.NewGameButton{
    display: grid;
    grid-column:1/2;
     background-color: burlywood; 
 border: 1px solid #333;
}

</style>
