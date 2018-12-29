<template>
  <div id="p-content-text">
    <p id="c-content-title">{{ title }}</p>
  </div>
</template>
<script>
export default{
  name: 'ContentTitle',
  props: {
    title: { type: String, require: true },
  },
};
</script>
<style>
  #p-content-text {
    width:auto;
  }
  #c-content-title {
    margin: 0;
    padding:0 1em 0 0.5em;
    font-family: 'fututa';
    color: white;
    border-bottom: solid white 1px;
  }
</style>
