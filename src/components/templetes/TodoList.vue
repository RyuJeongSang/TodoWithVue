<template>
  <div class="listContainer">
    <div class="tapContainer">
      <todo-tap v-bind:propsdata="propsdata" @removeTodo="removeTodo" />
    </div>
    <div class="tapContainer">2</div>
    <div class="tapContainer">3</div>
  </div>
</template>

<script>
import TodoTap from "../molecules/TodoTap.vue";

export default {
  props: ["propsdata"],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeTodo", todoItem, index);
    },
  },
  components: {
    TodoTap,
  },
};
</script>

<style scoped>
.listContainer {
  display: grid;
  height: 700px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 45px;
  justify-items: center;
}
.tapContainer {
  background: #383838;
  opacity: 0.5;
  height: auto;
  width: 90%;
  border-radius: 20px;
}
</style>
