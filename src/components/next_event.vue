<template>
  <div id="p-next-event">
    <ContentTitle id="c-next-event-title"></ContentTitle>
    <div class="c-banner">
      <p>バナー的な</p>
    </div>
    <div id="c-next-event-date">
      <p id="c-next-event-date-text">12/30<br>SUN.</p>
    </div>
    <div id="c-next-event-description">
      <description id="c-next-event-description-text"></description>
    </div>
    <Button id="p-button"></Button>
  </div>
</template>
<script>
import ContentTitle from './content_title';
import Button from './button';
import Description from './description';

export default {
  name: 'NextEvent',
  components: { Description, ContentTitle, Button },
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
    top: -0.5em;
  }
  #p-button {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1em;
    margin: auto;
  }
  #c-next-event-date {
    text-align: right;
    z-index: 100;
  }
  #c-next-event-date-text{
    position: absolute;
    top: 0.5em;
    right: 1em;
    color: white;
    font-size: 34px;
  }
  .c-banner{
    position: absolute;
    height: 35%;
    width: 80%;
    top: 2em;
    left: 0;
    background-color: lightgray;
    z-index: 0;
  }
  #c-next-event-description {
    padding:45% 0 0 20%;
    text-align: center;
  }
  #c-next-event-description-text {
    background-color: white;
  }
</style>
