<template>
  <section class="event-list-section">
    <past-event-item
      v-for="item in eventItems"
      v-bind:key="item.id"
      :id=item.id
      :title=item.title
      :day=item.date
      :time=item.time
      :image_path=item.image_path
      :description=item.description
      :link_url=item.link_url
      :report_link_url=item.report_link_url>
    </past-event-item>
  </section>
</template>

<script>
import PastEventItem from './PastEventItem';

export default {
  name: 'PastEventListView',
  components: { PastEventItem },
  props: {
    eventItems: { type: Array, require: true },
  },
};
</script>

<style scoped>
</style>
