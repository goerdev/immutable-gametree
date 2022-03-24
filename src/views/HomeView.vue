<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Board></Board>
  </div>
</template>

<script>
import Board from '@/components/Board.vue';

export default {
  name: 'HomeView',
  components: {
    Board,
  },
};
</script>
