<template>
  <div class="top">
    <header>
      <div class="top-header">
        <div class="p-top-menu">
          <HamburgerMenu></HamburgerMenu>
        </div>
      </div>
    </header>
    <div class="p-top-image">
      <logo></logo>
      <p class="p-top-text">やってみたいを、<br>やってみよう。</p>
    <img src="./assets/img/tent.png" class="top-tent">
    </div>
    <div class="p-next-event">
      <content-title class="c-next-event-title" title="NEXT EVENT"></content-title>
      <div class="img-cover"><img :src="nextEvent['image_path']" class="c-banner"></div>
      <p class="c-next-event-date-text">{{ nextEvent['date'] }}<br>{{ nextEvent['weekday'] }}.</p>
      <div class="c-next-event-description">
        <description v-bind:title="nextEvent['title']"
                     v-bind:description="nextEvent['description']"
                     v-bind:id="nextEvent['id']"
                     v-bind:blank="true"
                     class="c-next-event-description-text">
        </description>
      </div>
      <div class="c-next-event-button">
        <template v-if="nextEvent['is_first'] === true">
          <a :href="nextEvent['link_url']" target="_blank">
          <strong><Button text="参加する"></Button></strong>
          </a>
        </template>
      </div>
    </div>
    <div class="p-lead">
      <img src="./assets/img/cube_logo_white.svg" class="c-lead-logo">
      <content-title2 title="Welcome to YZKAMP!" class="c-lead-title"></content-title2>
      <p class="c-lead-text">YZKAMP(ユズキャンプ)は、
        <br>みんなの「やってみたい」をやる場所です。
        <br>気軽に参加してね！
      </p>
      <div class="c-description-readmore">
        <router-link to="/about">
          <strong><white-read-more></white-read-more></strong>
        </router-link>
      </div>
    </div>
    <div class="p-schedule">
      <content-title title="SCHEDULE" class="c-schedule-title"></content-title>
      <Description v-bind:readmore="false"
                   title="イベントスケジュール"
                   description="開催予定のイベントを紹介。気になるイベントがあったら参加してみよう！"
                   class="c-schedule-description"></Description>
<!--      <div class="p-calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=h5bgc3ilvdug7d7i8dfkgnuf8c%40group.calendar.google.com&ctz=Asia%2FTokyo"
          style="border: 0"
          wclassth="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
-->
      <div class="c-schedule-button">
        <router-link to="/events">
          <strong><Button text="スケジュールを見る"></Button></strong>
        </router-link>
      </div>
    </div>
    <div class="p-past-events">
      <div class="past-event-title-div">
        <p class="c-past-events-title">&nbsp;&nbsp;&nbsp;&nbsp;PAST EVENTs</p>
      </div>
      <div class="c-past-events-description">
        <p class="c-past-events-description-title">▶︎過去の開催イベント</p>
        <p class="c-past-events-description-text">
          これまでにYZKAMPで開催してきたイベントたち。レポートが見れます。
        </p>
      </div>
      <img class="c-past-events-image" :src="pastEvent['image_path']">
      <div class="c-past-events-button">
        <router-link to="/past_events">
          <strong><Button text="過去の開催イベントを見る"></Button></strong>
        </router-link>
      </div>
    </div>
    <top-footer></top-footer>
  </div>
</template>
<script>
import firebase from 'firebase';
import Logo from './components/Logo';
import TopFooter from './components/layouts/TopFooter';
import ContentTitle from './components/ContentTitle';
import ContentTitle2 from './components/ContentTitle2';
import ReadMore from './components/ReadMore';
import Button from './components/Button';
import Description from './components/Description';
import HamburgerMenu from './components/layouts/HamburgerMenu';
import WhiteReadMore from './components/WhiteReadMore';
import firestore from './assets/javascript/firebase';

export default {
  components: { WhiteReadMore,
    HamburgerMenu,
    Button,
    ReadMore,
    ContentTitle,
    ContentTitle2,
    TopFooter,
    Logo,
    Description },
  data() {
    return {
      pastEvent: { id: null, title: '', date: '', time: '', image_path: '', description: '', link_url: '' },
      nextEvent: { id: null, title: '', date: '', time: '', image_path: '', description: '', link_url: '', is_first: false },
    };
  },
  created() {
    firestore.collection('events')
      .where('is_public', '==', true)
      .where('begin_datetime', '<=', this.getNowFormattedFirebase())
      .orderBy('begin_datetime', 'desc')
      .limit(1)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.pastEvent =
            {
              id: doc.id,
              title: doc.data().title,
              date: this.fromTimeStampToDate(doc.data().begin_datetime),
              time: this.fromTimeStampToTime(doc.data().begin_datetime),
              image_path: `/static/img/${doc.data().image_path}`,
              description: doc.data().description,
              link_url: doc.data().link_url,
            };
        });
      });
    firestore.collection('events')
      .where('is_public', '==', true)
      .where('begin_datetime', '>=', this.getNowFormattedFirebase())
      .orderBy('begin_datetime')
      .limit(1)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.nextEvent =
            {
              id: doc.id,
              title: doc.data().title,
              date: this.fromTimeStampToOnlyDate(doc.data().begin_datetime),
              weekday: this.fromTimeStampToDay(doc.data().begin_datetime),
              image_path: `/static/img/${doc.data().image_path}`,
              description: doc.data().description,
              link_url: doc.data().link_url,
              is_first: true,
            };
        });
      });
  },
  methods: {
    fromTimeStampToDay(date) {
      const WeekChars = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT'];
      const d = new Date(date.seconds * 1000);
      const wday = d.getDay();
      return `${WeekChars[wday]}`;
    },
    fromTimeStampToOnlyDate(date) {
      const d = new Date(date.seconds * 1000);
      const month = (`0${d.getMonth() + 1}`).slice(-2);
      const day = (`0${d.getDate()}`).slice(-2);
      return `${month}/${day}`;
    },
    replaceNewlineTag(str) {
      return str.replace(/<br>/g, ' ');
    },
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
      const hour = (`0${d.getHours()}`).slice(-2);
      const min = (`0${d.getMinutes()}`).slice(-2);
      return `${hour}:${min}`;
    },
    getNowFormattedFirebase() {
      return firebase.firestore.Timestamp.now();
    },
  },
};
</script>
<style scoped>
.img-cover {
  position: absolute;
  height: 180px;
  width: 300px;
  top: 50px;
  left: 0;
  z-index: 1;
  background-color: #666666;
}
.past-event-title-div {
  text-align: right;
}
.c-past-events-button {
  margin: 0em;
  padding: 14px 0 20px 0;
}
</style>
