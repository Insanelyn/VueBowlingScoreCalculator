<template>
  <div class="PageHeader">
    <div class="header">Bowling Calculator</div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.Pageheader {
  display:grid;
  grid-template-columns:12, 1fr;
}
.header {
  grid-column: 1 / 12;
}
</style>
