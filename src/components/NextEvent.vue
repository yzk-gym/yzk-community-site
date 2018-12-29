<template>
  <div class="p-next-event">
    <ContentTitle class="c-next-event-title" title="NEXT EVENT"></ContentTitle>
    <div class="c-banner">
      <p>バナー的な</p>
    </div>
    <div class="c-next-event-date">
      <p class="c-next-event-date-text">12/30<br>SUN.</p>
    </div>
    <div class="c-next-event-description">
      <description class="c-next-event-description-text"></description>
    </div>
    <div class="c-next-event-button">
    <Button text="参加する"></Button>
    </div>
  </div>
</template>
<script>
import ContentTitle from './ContentTitle';
import Button from './Button';
import Description from './Description';

export default {
  name: 'NextEvent',
  props: ['title'],
  components: { Description, ContentTitle, Button },
};
</script>
<style>
  .p-next-event{
    position: relative;
    height:auto;
    background-color: #0085B3;
  }
  .c-next-event-title {
    color: white;
    font-size: 28px;
    position: absolute;
    top: -0.5em;
  }
  .c-next-event-button {
    margin: 0em;
  }
  .c-next-event-date {
    text-align: right;
    z-index: 100;
  }
  .c-next-event-date-text{
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
  .c-next-event-description {
    padding:45% 0 0 0;
    text-align: center;
  }
  .c-next-event-description-text {
    background-color: #EBEBEB;
  }
</style>
