<template>
  <div id="events">
    <!--ザンさんがヘッダーつくったらはめる-->
    <section class="title-section">
      <content-title2 title="PAST EVENTs"></content-title2>
      <p class="title-desctiption">
        柚希ジムの過去のイベント開催リストです。<br>
        開催レポートが読めます。<br>
        今後の開催イベントは<router-link to="/events" class="text-link">こちら</router-link>
      </p>
    </section>
    <past-event-list-view></past-event-list-view>
    <top-footer></top-footer>
  </div>
</template>
<script>
import ContentTitle2 from './components/ContentTitle2';
import PastEventListView from './components/PastEventListView';
import TopFooter from './components/layouts/TopFooter';

export default {
  name: 'PastEventList',
  components: {
    PastEventListView,
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
  .coming-soon {
    font-family: 'fututa';
    background-color: #ebebeb;
    font-size: 30px;
    color: #009acc;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
  }
  .text-link {
    color: #FF8A7D;
    text-decoration: none;
  }
</style>
