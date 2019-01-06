<template>
  <div class="p-content-text">
    <p class="c-content-title">{{ title }}</p>
    <hr class="under-line">
  </div>
</template>
<script>
export default {
  name: 'ContentTitle2',
  props: {
    title: { type: String, require: true },
  },
};
</script>
<style scoped>
  .c-content-title {
    margin: 0 2em;
    font-family: 'fututa';
    padding-bottom: 0px;
    color: #ebebeb;
    font-size: 28px;
    line-height: 1em;
  }
  .under-line {
    margin: -4px 2.5em 0px;
    padding: 0px 0px;
    border-top: 1px solid #ebebeb;
  }
</style>
