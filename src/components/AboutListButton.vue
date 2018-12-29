<template>
  <div id="p-button">
    <p id="c-button-text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: "AboutListButton",
  props: {
    text: { type: String, require: true }
  }
};
</script>
<style>
#p-button {
  margin: 0 4em;
  background-color: #0085b3;
  border-radius: 0.2em 0.2em 0.2em 0.2em;
  text-align: center;
}
#c-button-text {
  padding: 0.5em;
  color: white;
}
</style>
