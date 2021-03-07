<template>
  <ul>
    <TodoItem
      v-on:remove-todo="removeTodo"
      v-for="(todo, i) in todos"
      v-bind:todo="todo"
      v-bind:index="i"
      v-bind:key="todo.id"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "App",
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
