<template>
  <div id="top">
    <logo></logo>
    <next-event></next-event>
    <div class="p-description">
      <img src="./assets/img/cube_logo_white.svg" id="c-description-logo">
      <content-title title="Welcome to YZKAMP!" id="c-description-title"></content-title>
      <p>詳細を
        <br>ここに
        <br>かく
      </p>
      <read-more id="c-description-readmore">
        <!-- <router-link to="/src/welcomeList.vue" tag="p"></router-link> -->
      </read-more>
    </div>
    <div id="p-schedule">
      <span></span>
      <content-title title="SCHEDULE" id="c-schedule-title"></content-title>
      <description v-bind:readmore="false" id="c-schedule-description"></description>
      <div id="p-calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=h5bgc3ilvdug7d7i8dfkgnuf8c%40group.calendar.google.com&ctz=Asia%2FTokyo"
          style="border: 0"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div id="c-schedule-button">
        <Button text="一覧を見る"></Button>
      </div>
    </div>
    <div id="p-past-events">
      <span></span>
      <content-title title="PAST EVENTs" id="c-past-events-title"></content-title>
      <description  v-bind:readmore="false" id="c-past-events-description"></description>
      <Button text="一覧を見る"></Button>
    </div>
    <top-footer></top-footer>
  </div>
</template>
<script>
import Logo from './components/Logo';
import NextEvent from './components/NextEvent';
import TopFooter from './components/layouts/TopFooter';
import ContentTitle from './components/ContentTitle';
import ReadMore from './components/ReadMore';
import Description from './components/Description';
import Button from './components/Button';

export default {
  components: { Button, Description, ReadMore, ContentTitle, TopFooter, NextEvent, Logo },
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
    color: white;
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
    text-align: left;
    margin-right: 50%;
    color: white;
    font-size: 34px;
  }
  #c-schedule-description {
    margin-left: 20%;
    background-color: #EBEBEB;
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
  #p-past-events {
    background-color: #EBEBEB;
  }
  #c-past-events-title {
    margin-left:30%;
    text-align: right;
    color: #009ACC;
    border-bottom: solid #009ACC 2px !important;
    font-size: 30px;
  }
  #c-past-events-description {
    margin-right: 20%;
    color: white;
    background-color: #009ACC;
  }
</style>
