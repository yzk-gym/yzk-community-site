<template>
  <div id="about-list">
    <contents-header></contents-header>
    <section class="title">
      <content-title title="Welcome to YZKAMP!" class="c-description-title"></content-title>
      <p class="title-description">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    </section>
    <section class="about-list-card">
      <about-list-card></about-list-card>
    </section>
    <div>
      <p class="invite-text">参加してみたくなったら
        <br>一緒に遊ぼう！
      </p>
    </div>
    <div>
      <AboutListButton class="about-list-button" text="◀イベント一覧を見る"></AboutListButton>
    </div>
    <top-footer></top-footer>
  </div>
</template>
<script>
import TopFooter from './components/layouts/TopFooter';
import ContentTitle from './components/ContentTitle';
import AboutListButton from './components/AboutListButton';
import AboutListCard from './components/AboutListCard';
import ContentsHeader from './components/layouts/ContentsHeader';

export default {
  name: 'AboutList',
  components: {
    AboutListButton,
    ContentTitle,
    TopFooter,
    AboutListCard,
    ContentsHeader,
  },
};
</script>
<style scoped>
#about-list {
  width: 100vw;
  background-color: #009acc;
}
.c-description-title {
  font-size: 22px;
  margin: 0 1.5em;
  padding-top: 1em;
  padding-bottom: 0.5em;
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
.invite-text {
  margin: 1.3em 0;
  font-family: "yzk-font";
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  line-height: 32px;
  letter-spacing: 2px;
}
.about-list-button {
  float: left;
}
</style>
