<template>
  <ul>
    <li class="title"><strong>▶︎{{ title }}</strong></li>
    <li>{{ description }}</li>
  </ul>
</template>

<script>
export default {
  name: 'TriangleProperty',
  props: {
    title: { type: String, require: true },
    description: { type: String, require: true },
  },
};
</script>

<style scoped>
  ul {
    list-style-type:none;
    margin: 8px 8px;
    padding:0;
    text-align: left;
  }
  li {
    margin:0;
    display: inline-block;
    font-size: 16px;
    color: #ffffff;
    text-align: left;
  }
  .title {
    width: 50%;
  }
</style>
