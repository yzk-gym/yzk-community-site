<template>
  <div class="p-button">
    <p class="c-button-text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: 'EventListEntryButton',
  props: {
    text: { type: String, require: true },
  },
};
</script>
<style scoped>
  .p-button {
    margin: 0 0em;
    background-color: #FF8A7D;
    border-radius: 0.2em 0.2em 0.2em 0.2em;
    text-align: center;
  }
  .c-button-text {
    padding:0.5em;
    color: white;
  }
</style>
