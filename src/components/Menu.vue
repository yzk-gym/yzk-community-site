<div id="app">
  <div style="position:relative">
    <button v-on:click.stop="showMenu = !showMenu">Menu</button>
    <dropdown-menu
      v-if="showMenu"
      v-on:close="showMenu = false"></dropdown-menu>
  </div>
  <p>
    ボタンをクリックするとドロップダウンします
  </p>
</div>

<script>
export default {
  name: 'Menu',
};
</script>
<script type="text/x-template" id="menu-template">
  <div class="menu" style="position:absolute">
    <div>AAA</div>
    <div>BBB</div>
    <div>CCC</div>
  </div>
</script>
