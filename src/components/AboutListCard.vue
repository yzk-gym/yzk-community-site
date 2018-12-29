<template>
  <div class="wrap">
    <div class="card">
      <img src="../assets/img/about-list-icon01.svg" id="about-list-icon">
      <p>▶︎オープンな秘密基地</p>
      <read-more v-if="readmore" id="c-description-readmore"></read-more>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon02.svg" id="about-list-icon">
      <p>▶︎クロスオーバー</p>
      <read-more v-if="readmore" id="c-description-readmore"></read-more>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon03.svg" id="about-list-icon">
      <p>▶︎楽しむためのレベル上げ</p>
      <read-more v-if="readmore" id="c-description-readmore"></read-more>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon04.svg" id="about-list-icon">
      <p>▶︎楽しいをつくる</p>
      <read-more v-if="readmore" id="c-description-readmore"></read-more>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon05.svg" id="about-list-icon">
      <p>▶︎「やってみたら楽しい」をやれる場所</p>
      <read-more v-if="readmore" id="c-description-readmore"></read-more>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon06.svg" id="about-list-icon">
      <p>▶︎スマートなバカ</p>
      <read-more v-if="readmore" id="c-description-readmore"></read-more>
    </div>
  </div>
</template>
<script>
import ReadMore from "../components/ReadMore";
export default {
  name: "AboutListCard",
  components: { ReadMore },
  props: {
    readmore: { type: Boolean, default: true }
  }
};
</script>
<style>
#about-list-icon {
  margin-top: 1em;
  width: 70%;
}
.wrap {
  width: 100%;
  margin: 0;
  padding: 2em 0;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  background-color: #ebebeb;
}
.card {
  background-color: #ffffff;
  position: relative;
  margin: 0.3em;
  width: 10.5em;
  height: 14em;
}
#c-description-readmore {
  color: #ff8a7d;
  margin: 0 1.5em;
}
@media (min-width: 600px) {
  .flexbox {
    display: -webkit-flex;
    display: flex;
  }
  .main {
    margin: 0 10px 0 0;
  }
}
</style>
