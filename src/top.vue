<template>
  <div id="top">
    <logo></logo>
    <next-event></next-event>
  </div>
</template>
<script>
import 'normalize.css';
import Logo from './components/logo';
import NextEvent from './components/next_event';
import Footer from './components/layouts/footer';

export default {
  components: { Footer, NextEvent, Logo },
};
</script>
<style>
  #top {
    width: 100vw;
    background-color: #009ACC;
  }
</style>
