<template>
  <div class="top">
    <header>
      <div class="top-header">
      <HamburgerMenu class="p-top-menu"></HamburgerMenu>
      </div>
    </header>
    <div>
    <img src="./assets/img/top_header.svg">
    </div>
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
      <span></span>
    </div>
    <div class="p-lead">
      <img src="./assets/img/cube_logo_white.svg" class="c-lead-logo">
      <content-title title="Welcome to YZKAMP!" class="c-lead-title"></content-title>
      <p>詳細を
        <br>ここに
        <br>かく
      </p>
      <read-more class="c-description-readmore">
        <!-- <router-link to="/src/welcomeList.vue" tag="p"></router-link> -->
      </read-more>
    </div>
    <div class="p-schedule">
      <span></span>
      <content-title title="SCHEDULE" class="c-schedule-title"></content-title>
      <Description v-bind:readmore="false" class="c-schedule-description"></Description>
      <div class="p-calendar">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=h5bgc3ilvdug7d7i8dfkgnuf8c%40group.calendar.google.com&ctz=Asia%2FTokyo"
          style="border: 0"
          wclassth="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div class="c-schedule-button">
        <Button text="一覧を見る"></Button>
      </div>
    </div>
    <div class="p-past-events">
      <span></span>
        <p class="c-past-events-title">PAST EVENTs</p>
        <div class="c-past-events-description">
          <p class="c-past-events-description-title">イベントタイトル</p>
          <p class="c-past-events-description-text">
            イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細イベント詳細
          </p>
      </div>
      <Button text="一覧を見る"></Button>
      <span></span>
    </div>
    <top-footer></top-footer>
  </div>
</template>
<script>
import Logo from './components/Logo';
import TopFooter from './components/layouts/TopFooter';
import ContentTitle from './components/ContentTitle';
import ReadMore from './components/ReadMore';
import Button from './components/Button';
import Description from './components/Description';
import HamburgerMenu from './components/layouts/HamburgerMenu';

export default {
  components: { HamburgerMenu, Button, ReadMore, ContentTitle, TopFooter, Logo, Description },
};
</script>
