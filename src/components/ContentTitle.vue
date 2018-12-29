<template>
  <div class="p-content-text">
    <p class="c-content-title">{{ title }}</p>
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
<style scoped>
  .p-content-text {
    width:auto;
  }
  .c-content-title {
    margin: 0;
    padding:0 1em 0 0.5em;
    font-family: 'fututa';
    border-bottom: solid white 1px;
    color: white;
    font-size: 28px;
  }
</style>
