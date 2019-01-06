<template>
  <div class="p-button">
    <p class="c-button-text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: 'AboutListButton',
  props: {
    text: { type: String, require: true },
  },
};
</script>
<style scoped>
.p-button {
  background-color: #0085b3;
  text-align: center;
}
.c-button-text {
  font-size: 12px;
  padding: 0 4em;
  color: #ffffff;
}
</style>
