<template>
  <section class="event-list-section">
    <event-item
      v-for="item in EventListItems"
      v-bind:key="item.id"
      :title=item.title
      :day=item.date
      :time=item.time
      :image_path=item.image_path
      :description=item.description
      :link_url=item.link_url>
    </event-item>
  </section>
</template>

<script>
import firebase from 'firebase';
import EventItem from './EventItem';
import firestore from '../assets/javascript/firebase';

export default {
  name: 'EventListView',
  components: { EventItem },
  data() {
    return {
      EventListItems: [], // API経由で取得するため空で初期化する
    };
  },
  created() {
    this.EventListItems = [];
    firestore.collection('events').where('begin_datetime', '>=', this.getNowFormattedFirebase()).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.EventListItems.push(
          {
            id: doc.id,
            title: doc.data().title,
            date: this.fromTimeStampToDate(doc.data().begin_datetime),
            time: this.fromTimeStampToTime(doc.data().begin_datetime),
            image_path: `/static/img/${doc.data().image_path}`,
            description: this.replaceNewlineTag(doc.data().description),
            link_url: doc.data().link_url,
          });
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
  },
};
</script>

<style scoped>
</style>
