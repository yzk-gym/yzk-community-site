<template>
  <div class="p-footer">
    <nav class="c-footer-itemlist">
      <ul class="c-footer-item">
        <li><p><router-link to="/">- TOPページ</router-link></p></li>
        <li><p><router-link to="/about">- YZKAMPへようこそ！</router-link></p></li>
        <li><p><router-link to="/events">- イベントスケジュール</router-link></p></li>
        <li><p><router-link to="/past_events">- 過去の開催イベント</router-link></p></li>
      </ul>
    </nav>
    <p class="c-footer-copyright">©︎YZKAMP</p>
  </div>
</template>
<script>
export default {
  name: 'WhiteFooter',
};
</script>
<style scoped>
  .p-footer {
    background-color: #ebebeb;
    padding-top: 55px;
  }
  .c-footer-itemlist {
    text-align: left;
    padding: 3em 0 0 0;
  }
  .c-footer-item {
    list-style: none;
    color: #009ACC;
  }
  .c-footer-copyright {
    text-align: center;
    font-size: 14px;
    color: #009ACC;
    margin: 0 0;
    padding: 2em;
  }
  a {
    text-decoration: none;
    color: #009ACC;
  }
</style>
