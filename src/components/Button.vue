<template>
  <div id="p-button">
    <p id="c-button-text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: { type: String, require: true },
  },
};
</script>
<style>
  #p-button {
    margin: 0 4em;
    background-color: #FF8A7D;
    border-radius: 0.2em 0.2em 0.2em 0.2em;
    text-align: center;
  }
  #c-button-text {
    padding:0.5em;
    color: white;
  }
</style>
