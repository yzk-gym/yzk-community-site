<template>
  <div class="wrap">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>
<script>
export default {
  name: "AboutListCard",
  props: {
    readmore: { type: String, default: true }
  }
};
</script>
<style>
.wrap {
  width: 100%;
  margin: 0;
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  background-color: #ebebeb;
}
.card {
  background-color: #ffffff;
  position: relative;
  margin: 0.5em;
  width: 9.5em;
  height: 12em;
}
@media (min-width: 600px) {
  .flexbox {
    display: -webkit-flex;
    display: flex;
  }
  .main {
    margin: 0 10px 0 0;
  }
}
</style>
