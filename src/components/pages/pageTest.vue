<template>
  <div>
    <main class="flexbox">
      <Board id="board-1">
        <Card id="card-1" draggable="true">
          <p>Cardone</p>
        </Card>
      </Board>
      <Board id="board-2">
        <Card id="card-2" draggable="true">
          <p>Cardtwo</p>
        </Card>
      </Board>
    </main>
  </div>
</template>

<script>
import Board from "../templetes/BoardCard.vue";
import Card from "../templetes/CardView.vue";

export default {
  name: "test-page",
  components: {
    Board,
    Card,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #f3f3f3;
}
.flexbox {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
}
.flexbox .board {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background: #313131;
  padding: 15px;
}
.flexbox .board .card {
  padding: 15px 25px;
  background: #f3f3f3;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>
