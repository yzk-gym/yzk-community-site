<template>
  <div class="p-header">
    <router-link to="/">
      <img class="p-header-logo" src="../../assets/img/cube_logo_white.svg">
    </router-link>
    <hamburger-menu v-bind:logo="true" class="header-hunburgermenu"></hamburger-menu>
  </div>
</template>
<script>
import HeaderInLogo from './HeaderInLogo';
import HamburgerMenu from './HamburgerMenu';

export default {
  name: 'ContentsHeader',
  data() {
    return { HeaderInLogo: true };
  },
  components: {
    HeaderInLogo,
    HamburgerMenu,
  },
  props: {
    headerInLogo: { type: Boolean, default: true },
  },
};
</script>
<style scoped>
  .p-header {
    height: 5em;
    width: 100vw;
    position: fixed;
    background-color: #0085B3;
    z-index: 30;
  }
  .p-header-logo {
    position: absolute;
    margin: 0.5em;
    top:0;
    left: 0;
    width:4em;
  }
  .header-hamburgermenu {
    display: flex;
  }
</style>
