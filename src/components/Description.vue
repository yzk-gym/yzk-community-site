<template>
  <div class="p-description">
    <p class="p-description-title">イベントタイトル</p>
    <p class="p-description-text">イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細</p>
    <read-more v-if="readmore"  class="c-description-readmore"></read-more>
  </div>
</template>
<script>
import ReadMore from './ReadMore';

export default {
  name: 'Description',
  components: { ReadMore },
  props: {
    readmore: { type: Boolean, default: true },
  },
};
</script>
<style scoped>
  .p-description {
    margin-left: 20%;
  }
   .p-description-title{
     padding: 2em 0.5em 0;
     text-align: left;
     color: black;
   }
  .p-description-text{
    padding: 0.5em 0.5em;
    text-align: left;
    color: black;
  }
  .c-description-readmore {
    margin: 0  0  0 60%;
    padding: 0.5em 1em 0.1em 0;
    color: #FF8A7D;
  }
</stylescoped>
