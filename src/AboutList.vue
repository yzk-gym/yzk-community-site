<template>
  <div id="about-list">
    <content-title title="Welcome to YZKAMP!" class="c-description-title"></content-title>
    <p class="title-description">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    <div class="about-list-card">
      <about-list-card></about-list-card>
    </div>
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

export default {
  name: 'AboutList',
  components: {
    AboutListButton,
    ContentTitle,
    TopFooter,
    AboutListCard,
  },
};
</script>
<style scoded>
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
