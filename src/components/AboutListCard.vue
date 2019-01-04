<template>
  <div class="wrap">
    <div class="card">
      <img src="../assets/img/about-list-icon01.svg" class="about-list-icon">
      <p class="card-title">▶︎オープンな秘密基地</p>
			<p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon02.svg" class="about-list-icon">
      <p class="card-title">▶︎クロスオーバー</p>
			<p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon03.svg" class="about-list-icon">
      <p class="card-title">▶︎楽しむためのレベル上げ</p>
			<p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon04.svg" class="about-list-icon">
      <p class="card-title">▶︎楽しいをつくる</p>
			<p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon05.svg" class="about-list-icon">
      <p class="card-title-exception">▶︎「やってみたら楽しい」をやれる場所</p>
			<p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <div class="card">
      <img src="../assets/img/about-list-icon06.svg" class="about-list-icon">
      <p class="card-title">▶︎スマートなバカ</p>
			<p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutListCard',
};
</script>
<style scoped>
.about-list-icon {
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
.card-title {
  margin-top: 16px;
  font-size: 12px;
  font-weight: bold;
  color: #ff8a7d;
  line-height: 24px;
  letter-spacing: 1px;
}
.card-title-exception {
  margin-top: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #ff8a7d;
  line-height: 16px;
  letter-spacing: 1px;
}
.event-read-more {
	color: #ff8a7d;
	text-align: center;
	margin-top: 16px;
	margin-bottom: 0px;
	font-size: 14px;
	font-weight: 500;
	text-decoration: underline;
	white-space: pre;
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
