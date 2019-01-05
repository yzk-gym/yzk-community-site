<template>
	<div class="card">
		<img src="../assets/img/about-list-icon01.svg" class="about-list-icon">
		<p class="card-title">▶︎オープンな秘密基地</p>
		<p class="card-description">
			テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
		</p>
    <p class="close" @click="closeModal">&nbsp;&nbsp;閉じる&nbsp;&nbsp;</p>
	</div>
</template>
<script>
export default {
	name: 'CardModal01',
	data() {
    return {
      closeModal: true
    }
  },
}
</script>
<style scoped>
	.card {
  background-color:rgba(0,0,0,0);
	position: relative;
	margin: 10px;
  width: auto;
  height: 30em;
}
.about-list-icon {
	width: 70%;
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
	position: relative;
	top: 120px;
  margin-top: 16px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: underline;
  white-space: pre;
}
</style>
