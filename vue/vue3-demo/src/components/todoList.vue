<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <h1>Vue3 todos</h1>
        <input
          type="text"
          class="new-todo"
          placeholder="想干的事"
          @keyup.enter="addTodo"
          v-model="newtodo"
        />
      </header>
    </section>
    <section class="main">
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="todo.id" class="todo">
          <div class="view">
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="deleteTodo(index)"></button>
          </div>
        </li>
      </ul>
    </section>

    <!-- <section class="main">
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="todo.id" class="todo">
          <div class="view">
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="Delete(index)"></button>
          </div>
        </li>
      </ul>
    </section> -->
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      newtodo: "",
      todos: [
        { id: "1", title: "吃饭", complated: false },
        { id: "2", title: "睡觉", complated: false },
      ],
    });
    function addTodo() {
      console.log(state.newtodo);
      let value = state.newtodo && state.newtodo.trim();
      if (!value) return;
      else {
        state.todos.push({
          id: state.todos.length + 1,
          title: value,
          complated: false,
        });
        state.newtodo = "";
      }
    }
    function Delete(index) {
      for (let key in state) {
        console.log(state[key], "-----", index);
      }
    }
    return {
      ...toRefs(state),
      addTodo,
      Delete,
    };
  },
};
</script>

<style>
</style>
