<template>
  <header class="header">
    <header-in-logo v-if="headerInLogo"></header-in-logo>
    <hamburger-menu class="header-hunburgermenu"></hamburger-menu>
  </header>
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
  .header {
    position: sticky;
    top: 0;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
  .header-hamburgermenu {
    display: flex;
  }
</style>
