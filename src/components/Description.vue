<template>
  <div class="p-description">
    <span v-if="blank"></span>
    <p class="p-description-title">▶︎{{ title }} </p>
    <p v-html="description" class="p-description-text"></p>
    <div v-show="readmore === true && id !== null" class="read-more-div">
      <router-link v-show="readmore === true && id !== null" class="text-link"
                   :to="{ name: 'EventDescription', params: { id: this.id } }">
        <p v-show="readmore === true && id !== null"
           class="event-read-more">&nbsp;READ MORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import ReadMore from './ReadMore';

export default {
  name: 'Description',
  components: { ReadMore },
  props: {
    id: { type: String, default: null },
    blank: { type: Boolean, default: false },
    readmore: { type: Boolean, default: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
  },
};
</script>
<style scoped>
  .p-description {
    margin-left: 20%;
    width: 80%;
  }
   .p-description-title{
     margin:0;
     padding: 12px 15px 0;
     text-align: left;
     font-weight: bolder;
     color: #0085B3;
     text-overflow: ellipsis;
   }
  .p-description-text{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 8px 18px 0px 18px;
    height: 48px;
    text-align: left;
    font-size: 14px;
    color: #0085B3;
  }
  .read-more-div {
    text-align: right;
    width: 80%;
  }
  .event-read-more {
    display: inline-block;
    text-align: right;
    margin-top: 7px;
    margin-bottom: 6px;
    margin-right: -60px;
    font-size: 14px;
    text-decoration: underline;
    white-space: pre;
  }
  .text-link {
    color: #FF8A7D;
  }
</style>
