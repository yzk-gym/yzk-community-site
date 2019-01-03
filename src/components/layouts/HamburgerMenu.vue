<template>
  <div v-bind:class="{ 'is-active': menuActive }"
       class="p-menu">
    <div v-on:click="menuToggle()"
    class="c-hamburger-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-if="menuActive" class="c-menu-list">
    <nav class="c-menu-list-item">
      <li class="c-menu-list-item-link">YZKAMPヘようこそ</li>
      <li class="c-menu-list-item-link">今後の開催予定イベント一覧</li>
      <li class="c-menu-list-item-link">過去の開催イベント一覧</li>
    </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HamburgerMenu',
  data() {
    return { menuActive: false };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>
<style scoped>
  .p-menu {
    position: relative;
    height: 3em;
    width: 100vw;
    z-index: 999;
  }
  .c-hamburger-menu {
    position: absolute;
    right: 0;
    width: 3em;
    height: 3em;
    line-height: 0.9em;
    background-color: #0085B3;
  }
  .c-hamburger-menu span {
    right: 50%;
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
  .is-active {
  }
  .c-menu-list {
    position: absolute;
    top: 0;
    background-color: #0085B3;
    width: 100vw;
    height: auto;
    z-index: -1;
  }
  .c-menu-list-item {
    margin: 3em 0 2em 0;
    list-style-type: none;
    line-height: 2em;
  }
  .c-menu-list-item-link {
    font-family: yzk-font;
    color: white;
    font-size: 20px;
  }
</style>
