<template>
  <div class="component-container">
    <feed-item v-for="i in 10" :key="i"/>
  </div>
</template>

<script>
import FeedItem from './FeedItem';

export default {
  components: { FeedItem },
  name: 'FeedList',
};
</script>

<style scoped>
  .component-container {
    background: #FFFFFF;
  }
</style>
