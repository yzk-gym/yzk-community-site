<template>
  <div class="p-card">
    <div v-on:click="closeModal()" class="c-card">
    </div>
    <div class="card">
      <img :src="image" class="about-list-icon">
      <p class="card-title">{{ title }}</p>
      <p class="card-description">
        {{ description }}
      </p>
      <div v-on:click="closeModal()" class="close">
        <p class="close-text">閉じる</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardModal01',
  props: {
    modalName: { type: String },
    title: { type: String, require: true, default: '' },
    description: { type: String, require: true, default: '' },
    image: { type: String, require: true, default: '' },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal', this.modalName);
    },
  },
};
</script>
<style scoped>
.p-card {
  position: fixed;
  top: 30px;
  height: 100vh;
  background-color: transparent;
}
@media screen and (min-width: 480px) {
  .p-card {
    width: 350px;
  }
}
.c-card{
  height: 100%;
  width:100%;
  background-color: transparent;
}
.card {
  position: absolute;
  top:0;
  background-color: rgba(255,255,255,0.9);
  margin: 10px 5%;
  width: 90%;
  height: 86%;
}
.about-list-icon {
  padding: 1em;
  width: 60%;
}
.card-title {
  margin-top: 16px;
  font-size: 22px;
  font-weight: bold;
  color: #ff8a7d;
  line-height: 24px;
  letter-spacing: 1px;
}
.card-description {
  color: #009ACC;
}
.close {
  color: #ff8a7d;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  margin-top: 16px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  white-space: pre;
}
.close-text {
  margin-bottom: 10px;
}
</style>
