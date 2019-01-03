<template>
  <div class="event-item">
    <p class="event-title">{{ title }}</p>
    <ul class="event-datetime">
      <li class="day"><strong>▶day</strong> {{ day }}</li>
      <li><strong>▶time</strong> {{ time }} START</li>
    </ul>
    <div class="event-sub">
      <img class="event-image" :src=image_path>
      <div class="event-string">
        <p class="event-description">{{ description }}</p>
        <a :href=link_url class="text-link" target="_blank">
          <p class="event-read-more">　READ MORE　　</p>
        </a>
      </div>
    </div>
    <div class="event-entry">
      <a :href=link_url target="_blank">
        <EventListEntryButton text="参加する"></EventListEntryButton>
      </a>
    </div>
  </div>
</template>

<script>
import EventListEntryButton from './EventListEntryButton';

export default {
  name: 'EventItem',
  components: {EventListEntryButton },
  props: {
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
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
  .text-link {
    color: #FF8A7D;
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
  .event-image {
    flex-basis: 160px;
    height: 105px;
  }
  .event-string {
    flex-basis: auto;
  }
  .event-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    margin-top: 2px;
    margin-bottom: 0px;
    margin-left: 8px;
    height: 80px;
    font-size: 14px;
    text-align: left;
    color: #009ACC;
  }
  .event-read-more {
    display: block;
    text-align: right;
    margin-top: 7px;
    margin-bottom: 0px;
    margin-right: -20px;
    font-size: 14px;
    text-decoration: underline;
    white-space: pre;
  }
  .event-entry {
    margin-right: 20px;
    margin-left: 20px;
  }
</style>
