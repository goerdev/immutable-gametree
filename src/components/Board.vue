<template>
  <div class="board">
    <div class="wrapper">
      <div id="player"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  mounted() {
    const elem = document.getElementById('player');
    this.player = new WGo.BasicPlayer(elem, {
      sgf: '(;KM[6.5]SZ[19];B[pd];W[dp];B[qp];W[dc];B[np])',
      layout: {},
      displayVariations: false,
      enableWheel: false,
      update: (event) => {
        console.log(event);
      },
    });
    this.player.last();

    this.editable = new WGo.Player.Editable(this.player, this.player.board);
    this.editable.set(true);
  },
};
</script>

<style scoped lang="scss">
.board {
  display: flex;
  flex-direction: column;
  .wrapper {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: antiquewhite;
  }
}
</style>

<style lang="scss">
#player {
  canvas {
    left: 0;
  }
}
</style>
