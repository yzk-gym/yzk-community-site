<template>
  <div class="p-description">
    <p class="p-description-title"> {{ title }} </p>
    <p class="p-description-text"> {{ description }} </p>
    <div class="c-description-readmore">
      <read-more v-if="readmore"></read-more>
    </div>
  </div>
</template>
<script>
import ReadMore from './ReadMore';

export default {
  name: 'Description',
  components: { ReadMore },
  props: {
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
     padding: 2em 0.5em 0;
     text-align: left;
     font-weight: bolder;
     color: black;
   }
  .p-description-text{
    padding: 0.5em 0.5em;
    text-align: left;
    color: black;
  }
  .c-description-readmore {
    margin: 0  0  0 60%;
    color: #FF8A7D;
  }
</style>
