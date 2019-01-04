<template>
  <div class="p-description">
    <span v-if="blank"></span>
    <p class="p-description-title">▶︎{{ title }} </p>
    <p v-html="description" class="p-description-text"></p>
      <router-link :to="{ name: 'EventDescription', params: { id: this.id } }">
        <div class="c-description-readmore">
          <read-more v-if="readmore"></read-more>
        </div>
      </router-link>
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
  }
   .p-description-title{
     margin:0;
     padding: 1em 1em 0;
     text-align: left;
     font-weight: bolder;
     color: #009ACC;
   }
  .p-description-text{
    margin: 0;
    padding: 1em 1em;
    text-align: left;
    color: #009ACC;
  }
  .c-description-readmore {
    margin: 0  0  0 60%;
    color: #FF8A7D;
  }
</style>
