<template>
  <section class="event-list-section">
    <event-item
      v-for="item in eventItems"
      v-bind:key="item.id"
      :id=item.id
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
import EventItem from './EventItem';

export default {
  name: 'EventListView',
  components: { EventItem },
  props: {
    eventItems: { type: Array, require: true },
  },
};
</script>

<style scoped>
</style>
