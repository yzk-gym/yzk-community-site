<template>
  <div class="wrap">
    <div class="card" @click="openModal01 = !openModal01">
      <img src="../assets/img/about-list-icon01.svg" class="about-list-icon">
      <p class="card-title">▶︎オープンな秘密基地</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal01">
        <card-modal
          :image="require('../assets/img/about-list-icon01.svg')"
          title="︎オープンな秘密基地"
          description="テキストテキストテキストテキストテキスト">
        </card-modal>
      </div>
    </transition>
    <div class="card" @click="openModal02 = !openModal02">
      <img src="../assets/img/about-list-icon02.svg" class="about-list-icon">
      <p class="card-title">▶︎クロスオーバー</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal02">
        <card-modal
          :image="require('../assets/img/about-list-icon02.svg')"
          title="︎クロスオーバー"
          description="テキストテキストテキストテキストテキスト">
        </card-modal>
      </div>
    </transition>
    <div class="card" @click="openModal03 = !openModal03">
      <img src="../assets/img/about-list-icon03.svg" class="about-list-icon">
      <p class="card-title">▶︎楽しむためのレベル上げ</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal03">
        <card-modal
          :image="require('../assets/img/about-list-icon03.svg')"
          title="楽しむためのレベル上げ"
          description="テキストテキストテキストテキストテキスト">
        </card-modal>
      </div>
    </transition>
    <div class="card" @click="openModal04 = !openModal04">
      <img src="../assets/img/about-list-icon04.svg" class="about-list-icon">
      <p class="card-title">▶︎楽しいをつくる</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal04">
        <card-modal
          :image="require('../assets/img/about-list-icon04.svg')"
          title="楽しいをつくる"
          description="テキストテキストテキストテキストテキスト">
        </card-modal>
      </div>
    </transition>
    <div class="card" @click="openModal05 = !openModal05">
      <img src="../assets/img/about-list-icon05.svg" class="about-list-icon">
      <p class="card-title-exception">▶︎「やってみたら楽しい」をやれる場所</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal05">
        <card-modal
          :image="require('../assets/img/about-list-icon05.svg')"
          title="「やってみたら楽しい」をやれる場所"
          description="テキストテキストテキストテキストテキスト">
        </card-modal>
      </div>
    </transition>
    <div class="card" @click="openModal06 = !openModal06">
      <img src="../assets/img/about-list-icon06.svg" class="about-list-icon">
      <p class="card-title">▶︎スマートなバカ</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal06">
        <card-modal
          :image="require('../assets/img/about-list-icon06.svg')"
          title="スマートなバカ"
          description="テキストテキストテキストテキストテキスト">
        </card-modal>
      </div>
    </transition>
  </div>
</template>
<script>
import CardModal from './CardModal';

export default {
  components: { CardModal },
  data() {
    return {
      openModal01: false,
      openModal02: false,
      openModal03: false,
      openModal04: false,
      openModal05: false,
      openModal06: false,
    };
  },
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
.open-modal {
  position: absolute;
  top: 100px;
  max-width: 280px;
  padding: 20px;
  border-radius: 4px;
  background-color:rgba(255,255,255,0.9);
  z-index: 1;
}
/* モーダル表示/非表示のアニメーション */
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 300ms ease-out;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 300ms ease-out;
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
