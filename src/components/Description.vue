<template>
  <div id="p-description">
    <p id="p-description-title">イベントタイトル</p>
    <p id="p-description-text">イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細</p>
    <read-more v-if="readmore"  id="c-description-readmore"></read-more>
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
<style>
  #p-description {
    background-color: #EBEBEB;
  }
   #p-description-title{
     padding: 2em 0.5em 0;
     text-align: left;
     color: black;
   }
  #p-description-text{
    padding: 0.5em 0.5em;
    text-align: left;
    color: black;
  }
  #c-description-readmore {
    margin: 0  0  0 60%;
    padding: 0.5em 1em 0.1em 0;
    color: #FF8A7D;
  }
</style>
