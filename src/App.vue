<template>
  <div id="app">
    <h1>Todo-application</h1>
    <TodoForm v-on:create-todo="createTodo"/>
    <hr>
    <TodoList v-bind:todos="todos" v-on:remove-todo="removeTodo"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
export default {
  name: 'App',
  components: {
    TodoList, TodoForm
  },
  data() {
      return {
          todos: [],
      }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    createTodo(data) {
      let newTodo = {
        id: Date.now(),
        title: data,
        completed: false
      }

      this.todos.push(newTodo);
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(response => response.json())
    .then(json => this.todos = json)
  }
}
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
