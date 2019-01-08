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
          title="オープンな秘密基地"
          description="YZKAMPは、ひみつきちのような場所です。<br>
          中には熱が渦巻いていて、外から見ていると気づかないかもしれないけど、ひとたび中に入ってみれば、色んなことが起きています。<br>
          <br>
          それでいてオープンな場所です。<br>
          みんなが、好きな時に、好きな形で参加できます。<br>
          俺も、お前も、あいつも、誰でも、参加できます。<br>
          おもしろそうだなと思ったら、軽率に参加してみよう。"
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
          title="クロスオーバー"
          description="YZKAMPは、みんなが主役の場所です。<br>
          ひとりひとりが自分の好きなこと得意なことで活躍します。<br>
          <br>
          脇役はいません。<br>
          みんながそれぞれの得意分野で主役を張り、助け合うのとはちょっと違って、参戦(クロスオーバー)し合う。<br>
          <br>
          そうしたら、もっと大きい「楽しい」がつくれる気がします。"
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
          description="楽しくなるために、成長する。<br>
          <br>
          「必要だから」と言って、嫌々レベル上げをする必要はありません。<br>
          ただ楽しいと思うことに挑戦して、結果としてそれが成長になる。<br>
          成長することによって、次の楽しいが生まれる。<br>
          <br>
          そういうサイクルが一番いいと思っています。<br>
          楽しいレベル上げをしよう。"
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
          description="楽しいをもらうのもいいけれど、楽しいをつくるのもいい。<br>
          <br>
          みんなで「楽しい」をつくって、つくった「楽しい」で、自分たちも楽しむ。<br>
          自給自足の楽しい。<br>
          <br>
          そして、もし一緒に楽しんでくれる人がいたら、おすそ分けして、たくさんの人と「楽しい」をつくりたい。"
          modal-name="楽しいを作る">
        </card-modal>
      </div>
    </transition>
    <div class="card"  v-on:click="modalActive('やってみたら楽しい')">
      <img src="../assets/img/about-list-icon05.svg" class="about-list-icon">
      <p class="card-title-exception">▶︎「やってみたい」をやれる場所</p>
      <p class="event-read-more">&nbsp;&nbsp;READ MORE&nbsp;&nbsp;</p>
    </div>
    <transition name="fade">
      <div class="open-modal" v-if="openModal05">
        <card-modal v-on:closeModal="modalActive"
          :image="require('../assets/img/about-list-icon05.svg')"
          title="「やってみたい」をやれる場所"
          description="YZKAMPは、みんなのやってみたいをやります。<br>
          <br>
          みんなのやってみたいを、バカにしません。<br>
          <br>
          斜に構えてるより、一緒にやってみるほうがいい。<br>
          それがYZKAMPです。<br>"
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
          description="スマートに、バカをやろう。<br>
          同じバカでも、怒られるバカじゃなくて、驚いてもらえたり、笑顔になってもらえるバカをやろう。<br>
          <br>
          もうちょっとこうしたら面白いんじゃないか？<br>
          それをそんなに真剣にやる意味はどこに？<br>
          えっ、それをそんな角度からみるの？<br>
          <br>
          そういうものに挑戦するのが、YZKAMP流の「スマートなバカ」です。"
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
  width: 100%;
  border-radius: 4px;
  background-color:transparent;
  z-index: 100;
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
