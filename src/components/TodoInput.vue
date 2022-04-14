<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon class="addBtn" :icon="['far', 'plus-square']" />
    </span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: () => {
      console.log(this.newTodoItem); // 저장
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput(); //비워주기(초기화)
    },
    clearInput: () => {
      this.newTodoItem = "";
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #62eac6, #32cee6);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addContainer:hover {
  font-size: 1.3rem;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
