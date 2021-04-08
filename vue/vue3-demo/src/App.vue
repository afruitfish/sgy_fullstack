<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <List />
    <TodoList />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import List from "./components/list";
import TodoList from "./components/todoList";
export default {
  name: "App",
  components: {
    List,
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
