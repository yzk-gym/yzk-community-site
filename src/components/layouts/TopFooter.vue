<template>
  <div class="p-footer">
    <nav class="c-footer-itemlist">
      <ul class="c-footer-item">
        <li><p><router-link to="/">- TOPページ</router-link></p></li>
        <li><p><router-link to="/about">- YZKAMPへようこそ</router-link></p></li>
        <li><p><router-link to="/events">- 今後の開催予定イベント一覧</router-link></p></li>
        <li><p><router-link to="/past_events">- 過去の開催イベント</router-link></p></li>
      </ul>
    </nav>
    <p class="c-footer-copyright">©︎YZKAMP</p>
  </div>
</template>
<script>
export default {
  name: 'TopFooter',
};
</script>
<style scoped>
  .p-footer {
    background-color: #009ACC;
    padding-top: 55px;
  }
  .c-footer-itemlist {
    text-align: left;
    padding: 4em 0 0 0;
  }
  .c-footer-item {
    list-style: none;
    color: white;
  }
  .c-footer-copyright {
    text-align: center;
    color: white;
    margin: 0 0;
    padding: 2em;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
</style>
