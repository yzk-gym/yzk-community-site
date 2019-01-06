<template>
  <div id="events">
    <contents-header></contents-header>
    <section class="title-section">
      <content-title2 title="PAST EVENTs"></content-title2>
      <p class="title-desctiption">
        YZKAMPの過去のイベント開催リストです。<br>
        開催レポートが読めます。<br>
        今後の開催イベントは<router-link to="/events" class="text-link">こちら</router-link>
      </p>
    </section>
    <past-event-list-view :event-items="EventItems"></past-event-list-view>
    <top-footer></top-footer>
  </div>
</template>
<script>
import firebase from 'firebase';
import firestore from './assets/javascript/firebase';
import ContentTitle2 from './components/ContentTitle2';
import PastEventListView from './components/PastEventListView';
import TopFooter from './components/layouts/TopFooter';
import ContentsHeader from './components/layouts/ContentsHeader';

export default {
  name: 'PastEventList',
  components: {
    ContentsHeader,
    PastEventListView,
    ContentTitle2,
    TopFooter,
  },
  data() {
    return {
      EventItems: [],
    };
  },
  beforeRouteEnter(route, redirect, next) {
    firestore.collection('events').where('begin_datetime', '<=', firebase.firestore.Timestamp.now()).orderBy('begin_datetime', 'desc').get()
      .then((querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
          events.push(doc);
        });
        next((vm) => {
          vm.dataSet(events);
        });
      });
  },
  methods: {
    fromTimeStampToDate(date) {
      const WeekChars = ['日', '月', '火', '水', '木', '金', '土'];
      const d = new Date(date.seconds * 1000);
      const year = d.getFullYear();
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      const day = (`0${d.getDate()}`).slice(-2);
      const wday = d.getDay();
      return `${year}.${month}.${day}( ${WeekChars[wday]} )`;
    },
    fromTimeStampToTime(date) {
      const d = new Date(date.seconds * 1000);
      const hour = (`0${d.getHours()}`).slice(-2);
      const min = (`0${d.getMinutes()}`).slice(-2);
      return `${hour}:${min}`;
    },
    getNowFormattedFirebase() {
      return firebase.firestore.Timestamp.now();
    },
    replaceNewlineTag(str) {
      return str.replace(/<br>/g, ' ');
    },
    dataSet(data) {
      const eventListItems = [];
      data.forEach((doc) => {
        eventListItems.push(
          {
            id: doc.id,
            title: doc.data().title,
            date: this.fromTimeStampToDate(doc.data().begin_datetime),
            time: this.fromTimeStampToTime(doc.data().begin_datetime),
            image_path: `/static/img/${doc.data().image_path}`,
            description: this.replaceNewlineTag(doc.data().description),
            link_url: doc.data().link_url,
            report_link_url: doc.data().report_link_url,
          });
      });
      this.EventItems = eventListItems;
    },
  },
};
</script>
<style scoped>
  #events {
    width: 100vw;
    background-color: #009ACC;
  }
  .title-section {
    padding-top: 6em;
    padding-bottom: 0.5em;
    text-align: center;
  }
  .title-desctiption {
    margin-top: 16px;
    font-family: "yzk-font";
    font-size: 13px;
    font-weight: bold;
    color: #ebebeb;
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
