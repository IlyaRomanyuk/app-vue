<template>
  <div>
    <h2>Todo-application</h2>
    <router-link to="/">Home</router-link>
    <TodoForm v-on:create-todo="createTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      v-on:remove-todo="removeTodo"
    />
    <div v-else>no todos!</div>
  </div>
</template>


<script>
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import Loader from "@/components/Loader";

export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
    Loader
  },
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all"
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "completed") {
        return this.todos.filter(item => item.completed);
      } else {
        return this.todos.filter(item => !item.completed);
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    createTodo(data) {
      let newTodo = {
        id: Date.now(),
        title: data,
        completed: false
      };

      this.todos.push(newTodo);
    }
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.loading = false;
          this.todos = json;
        }, 1000);
      });
  }
};
</script>

<style scoped>
</style>
