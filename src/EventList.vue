<template>
  <div id="events">
    <section class="title-section">
      <content-title2 title="SCHEDULE"></content-title2>
      <p class="title-desctiption">
        柚希ジムの今後のイベント開催リストです。<br>
        やってみたいものがあったら、<br>
        気軽に参加してみよう！<br>
        過去の開催イベントはこちら
      </p>
    </section>
    <event-list-view></event-list-view>
  </div>
</template>
<script>
import ContentTitle2 from './components/ContentTitle2';
import EventListView from './components/EventListView';

export default {
  name: 'EventList',
  components: {
    EventListView,
    ContentTitle2,
  },
};
</script>
<style scoped>
  #events {
    width: 100vw;
    background-color: #009ACC;
  }
  .title-section {
    padding-top: 1em;
    padding-bottom: 0.5em;
    text-align: center;
  }
  .title-desctiption {
    margin-top: 16px;
    font-family: "yzk-font";
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    line-height: 24px;
    letter-spacing: 1px;
  }
</style>
