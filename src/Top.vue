<template>
  <div class="top">
    <header>
      <div class="top-header">
      <HamburgerMenu class="p-top-menu"></HamburgerMenu>
      </div>
    </header>
    <div>
    <img src="./assets/img/top_header.svg">
    </div>
    <div class="p-next-event">
      <ContentTitle class="c-next-event-title" title="NEXT EVENT"></ContentTitle>
      <div class="c-banner">
        <p>バナー的な</p>
      </div>
      <div class="c-next-event-date">
        <p class="c-next-event-date-text">{{ nextEvent['date'] }}<br>{{ nextEvent['weekday'] }}.</p>
      </div>
      <div class="c-next-event-description">
        <description v-bind:title="nextEvent['title']"
                     v-bind:description="nextEvent['description']"
                     class="c-next-event-description-text">
        </description>
      </div>
      <div class="c-next-event-button">
        <Button text="参加する"></Button>
      </div>
      <span></span>
    </div>
    <div class="p-lead">
      <img src="./assets/img/cube_logo_white.svg" class="c-lead-logo">
      <content-title title="Welcome to YZKAMP!" class="c-lead-title"></content-title>
      <p>詳細を
        <br>ここに
        <br>かく
      </p>
      <div class="c-description-readmore">
        <white-read-more></white-read-more>
      </div>
    </div>
    <!-- イベントスケジュールを表示するセクション。googleカレンダーを埋め込むのがイケてないので一旦非表示。
    <div class="p-schedule">
      <span></span>
      <content-title title="SCHEDULE" class="c-schedule-title"></content-title>
      <Description v-bind:readmore="false" class="c-schedule-description"></Description>
      <div class="p-calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=h5bgc3ilvdug7d7i8dfkgnuf8c%40group.calendar.google.com&ctz=Asia%2FTokyo"
          style="border: 0"
          wclassth="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div class="c-schedule-button">
        <Button text="一覧を見る"></Button>
      </div>
    </div>
    -->
    <div class="p-past-events">
      <span></span>
        <p class="c-past-events-title">PAST EVENTs</p>
        <div class="c-past-events-description">
          <p class="c-past-events-description-title"> 過去に開催したイベント</p>
          <p class="c-past-events-description-text">
            これまでにYZKAMPが開催してきたイベントたち
          </p>
      </div>
      <Button text="一覧を見る"></Button>
      <span></span>
    </div>
    <top-footer></top-footer>
  </div>
</template>
<script>
import firebase from 'firebase';
import Logo from './components/Logo';
import TopFooter from './components/layouts/TopFooter';
import ContentTitle from './components/ContentTitle';
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
    TopFooter,
    Logo,
    Description },
  data() {
    return {
      pastEvent: {},
      nextEvent: {},
    };
  },
  created() {
    this.pastEvent = '';
    firestore.collection('events').where('begin_datetime', '<=', this.getNowFormattedFirebase()).orderBy('begin_datetime').limit(1)
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
              description: `${doc.data().description}`,
              link_url: doc.data().report_link_url,
            };
        });
      });
    this.nextEvent = '';
    firestore.collection('events').where('begin_datetime', '>=', this.getNowFormattedFirebase()).orderBy('begin_datetime').limit(1)
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
              description: `${doc.data().description}`,
              link_url: doc.data().report_link_url,
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
  },
};
</script>
<style>
#p-calendar iframe {
  margin: 0 10%;
  max-width: 80%;
  max-height: 300px;
}
@media all and (min-width: 768px) {
  .googleCalendar iframe {
    height: 600px;
  }
}
</style>
