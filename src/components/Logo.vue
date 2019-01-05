<template>
  <div class="p-logo">
    <img src="../assets/img/cube_logo_white.svg" class="c-logo-cube"/>
    <img src="../assets/img/text_logo_white.svg" class="c-logo-text"/>
  </div>
</template>
<script>
export default {
  name: 'Logo',
};
</script>
<style scoped>
  .p-logo{
    /*height: 110px;*/
    text-align: center;
    color: white;
  }
  .c-logo-cube {
    display: block;
    height: 80px;
    margin: 0 auto 10px auto;
  }
  .c-logo-text {
    display: block;
    height: 55px;
    margin: 0 auto 10px auto;
  }
</style>
