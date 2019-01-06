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
        <p>&nbsp;&nbsp;閉じる&nbsp;&nbsp;</p>
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
  top: 80px;
  height: 100vh;
  background-color: transparent;
}
.c-card{
  height: 100vh;
  width:100vw;
  background-color: transparent;
}
.card {
  position: absolute;
  top:0;
  background-color:white;
  opacity: .9;
  margin: 10px 5%;
  width: 90%;
  height: 82%;
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
  bottom: 2em;
  margin-top: 16px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  white-space: pre;
}
</style>
