<template>
  <div id="event_description">
    <!--ザンさんがヘッダーつくったらはめる-->
    <section class="title-section">
      <content-title2 title="EVENT"></content-title2>
      <p class="event-title"></p>
    </section>
    <top-footer></top-footer>
  </div>
</template>
<script>
import ContentTitle2 from './components/ContentTitle2';
import TopFooter from './components/layouts/TopFooter';

export default {
  name: 'EventDescription',
  components: {
    ContentTitle2,
    TopFooter,
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
