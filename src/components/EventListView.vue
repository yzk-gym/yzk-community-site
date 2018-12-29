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
import EventItem from './EventItem';

export default {
  name: 'EventListView',
  components: { EventItem },
  data() {
    return {
      // テスト用に一時的に中身を作成
      EventListItems: [
        { id: 1, title: 'ポケモン駅伝', date: '2018.12.30(日)', time: '13:00', image_path: 'pokemon.png', description: 'ポケモンクリアするまで帰れま10', link_url: 'https://twipla.jp/events/355203' },
        { id: 2, title: '書き初めしちゃう会', date: '2019.01.03(木)', time: '13:00', image_path: 'kakizome.png', description: '書き初め大会', link_url: 'https://twipla.jp/events/357410' },
      ], // API経由で取得するため空で初期化する
    };
  },
  created() {
    return null;
  },
};
</script>

<style scoped>
</style>
