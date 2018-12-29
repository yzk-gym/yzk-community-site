<template>
  <div class="event-item">
    <p class="event-title">{{ title }}</p>
    <p class="event-day">{{ day }}</p>
    <p class="event-time">{{ time }} START</p>
    <img class="event-image" :src=image_path>
    <span class="event-description">{{ description }}</span>
    <span class="event-read-more">READ MORE</span>
    <a :href=link_url target="_blank"><Button text="参加する"></Button></a>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'EventItem',
  components: { Button },
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
    background-color: #ffffff;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
