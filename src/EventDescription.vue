<template>
  <div id="event_description">
    <contents-header></contents-header>
    <section class="title-section">
      <content-title2 title="EVENT"></content-title2>
      <p class="event-title">{{ title }}</p>
    </section>
    <img v-if="image_path !== ''" :src="image_path" class="event-image">
    <div class="property-div">
      <triangle-property title="day" :description="date"></triangle-property>
      <triangle-property title="time" :description="begin_time + ' START'"></triangle-property>
      <triangle-property title="place" :description="place"></triangle-property>
    </div>
    <p v-html="description" class="event-description"></p>
    <template v-if="is_past === true">
      <a v-show="link_url !== ''" :href="link_url" target="_blank">
        <Button v-show="link_url !== ''" text="参加募集ページを見る" class="button-text"></Button>
      </a>
      <span v-show="link_url === ''" class="no-report">参加募集ページはないよ</span>
      <a v-show="report_link_url !== ''" :href=report_link_url target="_blank">
        <Button v-show="link_url !== ''" text="レポートを見る" class="button-text"></Button>
      </a>
      <span v-show="report_link_url === ''" class="no-report">開催レポートはまだないよ</span>
    </template>
    <template v-else>
      <a v-show="link_url !== ''" :href="link_url" target="_blank">
        <Button v-show="link_url !== ''" text="参加する" class="button-text"></Button>
      </a>
      <span v-show="link_url === ''" class="no-report">参加ページはまだないよ</span>
    </template>
    <div class="footer-section">
      <template v-if="is_past === true">
        <router-link to="/past_events">
          <AboutListButton class="about-list-button" text="◀︎過去の開催イベントへ"></AboutListButton>
        </router-link>
      </template>
      <template v-else>
        <router-link to="/events">
          <AboutListButton class="about-list-button" text="◀︎今後の開催イベントへ"></AboutListButton>
        </router-link>
      </template>
      <white-footer></white-footer>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase';
import firestore from './assets/javascript/firebase';
import ContentTitle2 from './components/ContentTitle2';
import TriangleProperty from './components/TriangleProperty';
import WhiteFooter from './components/layouts/WhiteFooter';
import Button from './components/Button';
import AboutListButton from './components/AboutListButton';
import ContentsHeader from './components/layouts/ContentsHeader';

export default {
  name: 'EventDescription',
  components: {
    ContentsHeader,
    ContentTitle2,
    TriangleProperty,
    WhiteFooter,
    Button,
    AboutListButton,
  },
  data() {
    return {
      // API経由で取得するため空で初期化する
      id: '',
      title: '',
      date: '',
      begin_time: '',
      place: '',
      image_path: '',
      description: '',
      link_url: '',
      report_link_url: '',
      is_past: true,
    };
  },
  beforeRouteEnter(route, redirect, next) {
    firestore.collection('events').doc(route.params.id).get().then((doc) => {
      if (doc.exists) {
        next((vm) => {
          vm.dataSet(doc);
        });
      }
    });
  },
  methods: {
    fromTimeStampToDate(date) {
      const WeekChars = ['日', '月', '火', '水', '木', '金', '土'];
      const d = new Date(date.seconds * 1000);
      const year = d.getFullYear();
      if (year === 9999) {
        return '日付未定';
      }
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      const day = (`0${d.getDate()}`).slice(-2);
      const wday = d.getDay();
      return `${year}.${month}.${day}( ${WeekChars[wday]} )`;
    },
    fromTimeStampToTime(date) {
      const d = new Date(date.seconds * 1000);
      if (d.getFullYear() === 9999) {
        return '時間未定';
      }
      const hour = (`0${d.getHours()}`).slice(-2);
      const min = (`0${d.getMinutes()}`).slice(-2);
      return `${hour}:${min}`;
    },
    isPast(timestamp) {
      return timestamp <= firebase.firestore.Timestamp.now();
    },
    dataSet(doc) {
      // data設定処理
      this.id = doc.id;
      this.title = doc.data().title;
      this.date = this.fromTimeStampToDate(doc.data().begin_datetime);
      this.begin_time = this.fromTimeStampToTime(doc.data().begin_datetime);
      this.image_path = `/static/img/${doc.data().image_path}`;
      this.place = doc.data().place === '' ? '場所未定' : doc.data().place;
      this.description = `${doc.data().description}`;
      this.link_url = doc.data().link_url;
      this.report_link_url = doc.data().report_link_url;
      this.is_past = this.isPast(doc.data().begin_datetime);
    },
  },
};
</script>
<style scoped>
  #event_description {
    width: 100vw;
    background-color: #009ACC;
  }
  .title-section {
    padding-top: 6em;
    padding-bottom: 0.5em;
    text-align: center;
  }
  .event-title {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
  }
  .event-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .property-div {
    margin: 40px 50px;
  }
  .event-description {
    text-align: left;
    margin: 50px 25px;
    color: #ffffff;
    font-size: 14px;
    line-height: 18px;
  }
  a {
    text-decoration: none;
  }
  .about-list-button {
    float: left;
    margin-top: -17px;
  }
  .footer-section {
    margin-top: 70px;
  }
  .no-report {
    color: #ffffff;
  }
  .button-text {
    font-weight: bold;
  }
</style>
