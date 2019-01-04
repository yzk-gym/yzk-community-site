<template>
  <div id="event_description">
    <!--ザンさんがヘッダーつくったらはめる-->
    <section class="title-section">
      <content-title2 title="EVENT"></content-title2>
      <p class="event-title"></p>
    </section>
    {{ id }}
    {{ title }}
    {{ date }}
    {{ begin_time }}
    {{ place }}
    {{ image_path }}
    {{ description }}
    {{ link_url }}
    <top-footer></top-footer>
  </div>
</template>
<script>
import firestore from './assets/javascript/firebase';
import ContentTitle2 from './components/ContentTitle2';
import TopFooter from './components/layouts/TopFooter';

export default {
  name: 'EventDescription',
  components: {
    ContentTitle2,
    TopFooter,
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
    };
  },
  created() {
    firestore.collection('events').doc('1').get().then((doc) => {
      if (doc.exists) {
        // data設定処理
        this.id = doc.id;
        this.title = doc.data().title;
        this.date = this.fromTimeStampToDate(doc.data().begin_datetime);
        this.begin_time = this.fromTimeStampToTime(doc.data().begin_datetime);
        this.image_path = `/static/img/${doc.data().image_path}`;
        this.place = doc.data().place;
        this.description = `${doc.data().description}`;
        this.link_url = doc.data().link_url;
      }
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
  },
};
</script>
<style scoped>
  #event_description {
    width: 100vw;
    background-color: #009ACC;
  }
  .title-section {
    padding-top: 1em;
    padding-bottom: 0.5em;
    text-align: center;
  }
</style>
