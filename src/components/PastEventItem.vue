<template>
  <div class="event-item">
    <p class="event-title">{{ title }}</p>
    <ul class="event-datetime">
      <li class="day"><strong>▶︎day</strong> {{ day }}</li>
      <li><strong>▶︎time</strong> {{ time }} START</li>
    </ul>
    <div class="event-sub">
      <div class="event-image-div">
        <img v-if="image_path !== ''" class="event-image" :src=image_path>
      </div>
      <div class="event-string">
        <p class="event-description">{{ description }}</p>
        <div class="read-more-div">
          <router-link class="text-link"
                       :to="{ name: 'EventDescription', params: { id: this.id } }">
            <span class="event-read-more">&nbsp;READ MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="event-entry">
      <a v-show="link_url !== ''" :href=link_url target="_blank">
        <EventListEntryButton v-show="link_url !== ''" text="レポートを見る"></EventListEntryButton>
      </a>
      <span v-show="link_url === ''" class="no-report">このイベントのレポートはありません</span>
    </div>
  </div>
</template>

<script>
import EventListEntryButton from './EventListEntryButton';

export default {
  name: 'EventItem',
  components: { EventListEntryButton },
  props: {
    id: { type: String, require: true },
    title: { type: String, require: true },
    day: { type: String, require: true },
    time: { type: String, require: true },
    image_path: { type: String, require: true },
    description: { type: String, require: true },
    link_url: { type: String, require: true },
  },
};
</script>

<style scoped>
  .event-item {
    background-color: #ebebeb;
    padding-top: 10px;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
  .text-link {
    color: #FF8A7D;
  }
  .no-report {
    display: block;
    color: #FF8A7D;
    font-weight: bold;
    margin-top: 25px;
    margin-bottom: 15px;
  }
  .event-title {
    font-size: 18px;
    font-weight: bold;
    color: #009ACC;
    margin-bottom: 10px;
  }
  ul {
    list-style-type:none;
    margin:0;
    padding:0;
  }
  li{ margin:0; }
  .event-datetime {
    margin-bottom: 15px;
  }
  .event-datetime li {
    display: inline-block;
    text-align: center;
    font-size: 14px;
    color: #009ACC;
  }
  .day {
    margin-right: 10px;
  }
  .event-sub {
    display: flex;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .event-image-div {
    flex-basis: 160px;
  }
  .event-image {
    width: 160px;
    height: 105px;
    object-fit: cover;
    border-style:none;
  }
  .event-string {
    flex-basis: auto;
    width: 100%;
  }
  .event-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 2px;
    margin-bottom: 0;
    margin-left: 8px;
    height: 80px;
    font-size: 14px;
    text-align: left;
    color: #009ACC;
  }
  .event-read-more {
    display: inline-block;
    text-align: right;
    margin-top: 7px;
    margin-bottom: 0;
    margin-right: -20px;
    font-size: 14px;
    text-decoration: underline;
    white-space: pre;
  }
  .event-entry {
    margin-right: 20px;
    margin-left: 20px;
  }
  .read-more-div {
    text-align: right;
  }
</style>
