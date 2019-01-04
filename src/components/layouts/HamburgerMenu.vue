<template>
  <div class="p-menu">
    <div v-on:click="menuToggle()"
         v-bind:class="{ 'is-active': menuActive }"
         class="c-hamburger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-bind:class="{ 'is-active': menuActive }"
         class="c-menu-list">
      <router-link to="/">
        <img v-if="logo" src="../../assets/img/cube_logo_white.svg" class="c-menu-list-logo">
      </router-link>
    <nav class="c-menu-list-item">
      <li>
        <router-link to="/about" class="c-menu-list-item-link">YZKAMPヘようこそ</router-link>
      </li>
      <li>
        <router-link to="/events" class="c-menu-list-item-link">今後の開催予定イベント一覧</router-link>
      </li>
      <li>
        <router-link to="/past_events" class="c-menu-list-item-link">過去の開催イベント一覧</router-link>
      </li>
    </nav>
    </div>
    <div v-if="menuActive" v-on:click="close()" class="c-menu-hidden"></div>
  </div>
</template>
<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return { menuActive: false };
  },
  props: {
    logo: { type: Boolean, require: true, default: false },
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    },
    close() {
      this.menuActive = false;
    },
  },
};
</script>
<style scoped>
  .p-menu {
    position: relative;
    height: 3em;
    width: 100vw;
  }
  .c-hamburger-menu {
    position: absolute;
    top: 1em;
    right: 1em;
    width: 3em;
    height: 3em;
    line-height: 0.9em;
    background-color: #0085B3;
    border-radius: 0.4em 0.4em 0.4em 0.4em;
    z-index: 30;
  }
  .c-hamburger-menu span {
    display: inline-block;
    transition: all .4s;
    box-sizing: border-box;
  }
  .c-hamburger-menu span {
    width: 2em;
    height: 3px;
    background-color: white;
    border-radius: 4px;
  }
  /* ここでハンバーガーメニューのアイコンを×に変えてる。微調整してたりするのでちょい崩れたりするかも。 */
  .c-hamburger-menu.is-active span:nth-of-type(1) {
    -webkit-transform: translateY(20px) rotate(-45deg);
    transform: translateY(9px) rotate(-45deg);
  }
  .c-hamburger-menu.is-active span:nth-of-type(2) {
    opacity: 0;
  }
  .c-hamburger-menu.is-active span:nth-of-type(3) {
    -webkit-transform: translateY(-20px) rotate(45deg);
    transform: translateY(-19px) rotate(45deg);
  }
  .c-menu-list {
    pointer-events: none;
    transition: opacity 0.5s;
    position: absolute;
    top: 0;
    background-color: #0085B3;
    width: 100vw;
    height: auto;
    opacity: 0;
  }
  .c-menu-list.is-active {
    pointer-events: all;
    opacity: 1;
  }
  .c-menu-list-logo {
    position:absolute;
    margin: 0.5em;
    width: 4em;
    left: 0;
    color: white;
    z-index: 20;
  }
  .c-menu-list-item {
    margin: 3.5em 0 2em 0;
    list-style-type: none;
    line-height: 2.5em;
    color: white;
  }
  .c-menu-list-item-link {
    font-family: yzk-font;
    color: white;
    font-size: 20px;
  }
  .c-menu-hidden {
    height: 100vh;
    z-index: 10;
  }
</style>
