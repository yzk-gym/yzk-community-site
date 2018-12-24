<template>
  <div id="p-logo">
    <img src="../assets/cube_logo_white.svg" id="c-logo-cube"/>
    <img src="../assets/text_logo_white.svg" id="c-logo-text"/>
  </div>
</template>
<script>
export default {
  name: 'Logo',
};
</script>
<style>
  #p-logo{
    height: 150px;
    text-align: center;
    color: white;
  }
  #c-logo-cube {
    max-height: 40%;
  }
  #c-logo-text {
    max-height: 40%;
  }
</style>
