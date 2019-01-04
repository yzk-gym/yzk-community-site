<template>
  <div v-if="headerInLogo" class="header-in-logo">
    <router-link to="/">
      <img class="logo" src="../../assets/img/cube_logo_white.svg">
    </router-link>
  </div>
</template>
<script>

export default {
  name: 'HeaderInLogo',
  props: {
    headerInLogo: { type: Boolean, default: true },
  },
};
</script>
<style scoped>
  .header-in-logo {
    background-color: #0085B3;
    width: auto;
    height: auto;
    text-align: left;
  }
  .logo {
    width: 2.7em;
    padding-left: 0.5em;
  }
</style>
