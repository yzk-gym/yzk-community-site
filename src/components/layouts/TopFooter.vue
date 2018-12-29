<template>
  <div id="p-footer">
    <nav id="c-footer-itemlist">
      <ul id="c-footer-item">
        <li><p>- TOPページ</p></li>
        <li><p>- NEXT EVENT</p></li>
        <li><p>- YZKAMPへようこそ</p></li>
        <li><p>- 今後の開催予定イベント一覧</p></li>
        <li><p>- 過去の開催イベント</p></li>
      </ul>
    </nav>
    <p id="c-footer-copyright">©︎YZKAMP</p>
  </div>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style>
  #p-footer {
    background-color: #009ACC;
  }
  #c-footer-itemlist {
    padding: 3em 0 0 0;
  }
  #c-footer-item {
    list-style: none;
    color: white;
  }
  #c-footer-copyright {
    text-align: center;
    color: white;
    margin: 0 0;
    padding: 2em;
  }
</style>
