<template>
  <div id="about-list">
    <contents-header></contents-header>
    <section class="title-section">
      <content-title title="Welcome to YZKAMP!" class="c-description-title"></content-title>
      <p class="title-description">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </section>
    <section class="about-list-card">
      <about-list-card></about-list-card>
    </section>
    <div class="invite-section">
      <p class="invite-text">参加してみたくなったら
        <br>一緒に遊ぼう！
      </p>
    </div>
    <div class="footer-section">
      <router-link to="/events">
        <AboutListButton class="about-list-button" text="◀︎イベント一覧を見る"></AboutListButton>
      </router-link>
      <white-footer></white-footer>
    </div>
  </div>
</template>
<script>
import WhiteFooter from './components/layouts/WhiteFooter';
import ContentTitle from './components/ContentTitle';
import AboutListButton from './components/AboutListButton';
import AboutListCard from './components/AboutListCard';
import ContentsHeader from './components/layouts/ContentsHeader';

export default {
  name: 'AboutList',
  components: {
    AboutListButton,
    ContentTitle,
    WhiteFooter,
    AboutListCard,
    ContentsHeader,
  },
};
</script>
<style scoped>
#about-list {
  width: 100%;
  background-color: #009acc;
}
.c-description-title {
  font-size: 22px;
  margin: 0 1.5em;
  padding-top: 1em;
  padding-bottom: 0.5em;
}
.title-section {
  padding-top: 5em;
}
.title-description {
  margin: 1.5em 2em;
  font-family: "yzk-font";
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  line-height: 24px;
  letter-spacing: 1px;
}
.invite-section {
  margin-top: 50px;
}
.invite-text {
  margin: 0;
  font-family: "yzk-font";
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  line-height: 32px;
  letter-spacing: 2px;
}
.about-list-button {
  float: left;
  margin-top: -17px;
}
.footer-section {
  margin-top: 50px;
}
</style>
