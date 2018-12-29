<template>
  <div id="top">
    <logo></logo>
    <next-event></next-event>
    <div class="p-description">
      <img src="./assets/img/cube_logo_white.svg" id="c-description-logo"/>
      <content-title title="Welcome to YZKAMP!" id="c-description-title"></content-title>
      <p>詳細を<br>ここに<br>かく</p>
      <read-more id="c-description-readmore"></read-more>
    </div>
    <div id="p-schedule">
      <span></span>
      <content-title title="SCHEDULE" id="c-schedule-title"></content-title>
      <description v-bind:readmore="false" id="c-schedule-description"></description>
      <div id="p-calendar">
        <iframe src="https://calendar.google.com/calendar/embed?src=h5bgc3ilvdug7d7i8dfkgnuf8c%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
      <div id="c-schedule-button">
        <Button text="一覧を見る"></Button>
      </div>
    </div>
  </div>
</template>
<script>
import 'normalize.css';
import Logo from './components/Logo';
import NextEvent from './components/NextEvent';
import Footer from './components/layouts/Footer';
import ContentTitle from './components/ContentTitle';
import ReadMore from './components/ReadMore';
import Description from './components/Description';
import Button from './components/Button';

export default {
  components: { Button, Description, ReadMore, ContentTitle, Footer, NextEvent, Logo },
};
</script>
<style>
  #top {
    width: 100vw;
    background-color: #009ACC;
  }
  .p-description {
    text-align: center;
  }
  #c-description-logo {
    margin: 0.5em;
    width:4em;
  }
  #c-description-title {
    margin: 0 2em;
    font-size: 22px;
  }
  #c-description-readmore {
    margin: 0;
    color: white;
  }
  #p-schedule {
    background-color: #0085B3;
  }
  #c-schedule-title {
    font-size: 34px;
  }
  #c-schedule-description {
    margin: 1em 0 0 40%;
    background-color: white;
  }
  #c-schedule-button {
    margin: 0em;
    padding: 1em;
  }
  #p-calendar iframe {
    margin: 0 10%;
    max-width: 80%;
    max-height: 300px;
  }
  @media all and (min-width: 768px) {
    .googleCalendar iframe {
      height: 600px;
    }
  }
</style>
