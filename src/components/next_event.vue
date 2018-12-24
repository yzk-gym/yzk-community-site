<template>
  <div id="p-next-event">
    <ContentTitle id="c-next-event-title"></ContentTitle>
    <Button></Button>
  </div>
</template>
<script>
import ContentTitle from './content_title';
import Button from './button';

export default {
  name: 'NextEvent',
  components: { ContentTitle, Button },
};
</script>
<style>
  #p-next-event{
    position: relative;
    height:500px;
    background-color: #0085B3;
  }
  #c-next-event-title {
    color: white;
    font-size: 18px;
    position: absolute;
    padding:0 1em 0 0.5em;
    border-bottom: solid white 1px;
    top: -1em;
  }
</style>
