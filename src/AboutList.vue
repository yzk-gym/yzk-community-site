<template>
  <div id="about-list">
    <content-title title="Welcome to YZKAMP!" id="c-description-title"></content-title>
    <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
    <div id="about-list-card">
      <about-list-card></about-list-card>
    </div>
    <div>
      <p>参加してみたくなったら
        <br>一緒に遊ぼう！
      </p>
    </div>
    <div id="c-about-list-button">
      <AboutListButton text="◀イベント一覧を見る"></AboutListButton>
    </div>
  </div>
</template>
<script>
import "normalize.css";
import Logo from "./components/Logo";
import NextEvent from "./components/NextEvent";
import Footer from "./components/layouts/Footer";
import ContentTitle from "./components/ContentTitle";
import ReadMore from "./components/ReadMore";
import Description from "./components/Description";
import AboutListButton from "./components/AboutListButton";
import AboutListCard from "./components/AboutListCard";

export default {
  name: "AboutList",
  components: {
    AboutListButton,
    Description,
    ReadMore,
    ContentTitle,
    Footer,
    NextEvent,
    Logo,
    AboutListCard
  }
};
</script>
<style>
#about-list {
  width: 100vw;
  background-color: #009acc;
}
.p-description {
  text-align: center;
}
#c-description-logo {
  margin: 0.5em;
  width: 4em;
}
#c-description-title {
  margin: 0 1.5em;
  font-size: 22px;
  padding: 2em 0;
}
#c-description-readmore {
  margin: 0;
  color: white;
}
</style>
