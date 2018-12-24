<template>
  <div id="p-top">
    <logo></logo>
    <next-event></next-event>
  </div>
</template>
<script>
import 'normalize.css';
import Logo from './components/logo';
import NextEvent from './components/next_event';

export default {
  components: { NextEvent, Logo },
};
</script>
<style>
  #p-top {
    width: 100vw;
    background-color: #009ACC;
  }
</style>
