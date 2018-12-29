<template>
  <div class="p-footer">
    <nav class="c-footer-itemlist">
      <ul class="c-footer-item">
        <li><p>- TOPページ</p></li>
        <li><p>- YZKAMPへようこそ</p></li>
        <li><p>- 今後の開催予定イベント一覧</p></li>
        <li><p>- 過去の開催イベント</p></li>
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
  }
  .c-footer-itemlist {
    text-align: left;
    padding: 3em 0 0 0;
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
</style>
