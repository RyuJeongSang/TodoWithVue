<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      placeholder="What Not To Do?"
      v-on:keyup.enter="addTodo"
    />
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon class="addBtn" :icon="['far', 'plus-square']" />
    </span>

    <alert-modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>경고</h3>
      </template>
      <template #body>
        <span> 할 일을 입력해주세요. </span>
      </template>
      <template #footer>
        <button @click="showModal = false">닫기</button>
      </template>
    </alert-modal>
  </div>
</template>

<script>
import AlertModal from "../utils/AlertModal.vue";

export default {
  data: function () {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value);
        this.clearInput();
      } else {
        this.showModal = true;
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
  components: {
    AlertModal,
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
