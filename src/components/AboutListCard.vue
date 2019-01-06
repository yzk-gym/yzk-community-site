<template>
  <div class="wrap">
    <div class="card" v-on:click="modalActive('秘密基地')">
      <img src="../assets/img/about-list-icon01.svg" class="about-list-icon">
      <p class="card-title">▶︎オープンな秘密基地</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal01">
        <card-modal v-on:closeModal="modalActive"
          :image="require('../assets/img/about-list-icon01.svg')"
          title="︎オープンな秘密基地"
          description="テキストテキストテキストテキストテキスト"
          modal-name="秘密基地">
        </card-modal>
      </div>
    </transition>
    <div class="card" v-on:click="modalActive('クロスオーバー')">
      <img src="../assets/img/about-list-icon02.svg" class="about-list-icon">
      <p class="card-title">▶︎クロスオーバー</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal02">
        <card-modal v-on:closeModal="modalActive"
          :image="require('../assets/img/about-list-icon02.svg')"
          title="︎クロスオーバー"
          description="テキストテキストテキストテキストテキスト"
          modal-name="クロスオーバー">
        </card-modal>
      </div>
    </transition>
    <div class="card" v-on:click="modalActive('レベル上げ')">
      <img src="../assets/img/about-list-icon03.svg" class="about-list-icon">
      <p class="card-title">▶︎楽しむためのレベル上げ</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal03">
        <card-modal v-on:closeModal="modalActive"
          :image="require('../assets/img/about-list-icon03.svg')"
          title="楽しむためのレベル上げ"
          description="テキストテキストテキストテキストテキスト"
          modal-name="レベル上げ">
        </card-modal>
      </div>
    </transition>
    <div class="card" v-on:click="modalActive('楽しいを作る')">
      <img src="../assets/img/about-list-icon04.svg" class="about-list-icon">
      <p class="card-title">▶︎楽しいをつくる</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal04">
        <card-modal v-on:closeModal="modalActive"
          :image="require('../assets/img/about-list-icon04.svg')"
          title="楽しいをつくる"
          description="テキストテキストテキストテキストテキスト"
          modal-name="楽しいを作る">
        </card-modal>
      </div>
    </transition>
    <div class="card"  v-on:click="modalActive('やってみたら楽しい')">
      <img src="../assets/img/about-list-icon05.svg" class="about-list-icon">
      <p class="card-title-exception">▶︎「やってみたら楽しい」をやれる場所</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal05">
        <card-modal v-on:closeModal="modalActive"
          :image="require('../assets/img/about-list-icon05.svg')"
          title="「やってみたら楽しい」をやれる場所"
          description="テキストテキストテキストテキストテキスト"
          modal-name="やってみたら楽しい">
        </card-modal>
      </div>
    </transition>
    <div class="card"  v-on:click="modalActive('スマートなバカ')">
      <img src="../assets/img/about-list-icon06.svg" class="about-list-icon">
      <p class="card-title">▶︎スマートなバカ</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal06">
        <card-modal v-on:closeModal="modalActive"
          :image="require('../assets/img/about-list-icon06.svg')"
          title="スマートなバカ"
          description="テキストテキストテキストテキストテキスト"
          modal-name="スマートなバカ">
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
      modalName: '',
    };
  },
  methods: {
    modalActive(number) {
      if (number === '秘密基地') {
        this.openModal01 = !this.openModal01;
      } else if (number === 'クロスオーバー') {
        this.openModal02 = !this.openModal02;
      } else if (number === 'レベル上げ') {
        this.openModal03 = !this.openModal03;
      } else if (number === '楽しいを作る') {
        this.openModal04 = !this.openModal04;
      } else if (number === 'やってみたら楽しい') {
        this.openModal05 = !this.openModal05;
      } else if (number === 'スマートなバカ') {
        this.openModal06 = !this.openModal06;
      }
    },
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
  height: 100%;
  width: 100vw;
  border-radius: 4px;
  background-color:transparent;
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
