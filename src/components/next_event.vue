<template>
  <div class="p-next-event">
    <ContentTitle></ContentTitle>
    <Button></Button>
  </div>
</template>
<script>
import ContentTitle from './content_title';
import Button from './button';

export default {
  name: 'NextEvent',
  components: { ContentTitle, Button },
};
</script>
<style>
  .p-next-event{
    background-color: #0085B3;
  }
</style>
