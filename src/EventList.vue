<template>
  <div id="events">
    <!--ザンさんがヘッダーつくったらはめる-->
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
    <p class="comming-soon">coming soon...</p>
    <top-footer></top-footer>
  </div>
</template>
<script>
import ContentTitle2 from './components/ContentTitle2';
import EventListView from './components/EventListView';
import TopFooter from './components/layouts/TopFooter';

export default {
  name: 'EventList',
  components: {
    EventListView,
    ContentTitle2,
    TopFooter,
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
  .comming-soon {
    font-family: 'fututa';
    background-color: #ffffff;
    font-size: 30px;
    color: #009acc;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
  }
</style>
