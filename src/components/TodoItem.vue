<template>
  <li>
    <span v-bind:class="{'remove-line': todo.completed}">
      <input v-on:change="todo.completed = !todo.completed" type="checkbox" />
      <strong>{{this.index + 1}}</strong>
      {{todo.title | uppercase}}
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)" class="remove-btn">&times;</button>
  </li>
</template>

<script>
export default {
  name: "App",
  components: {},
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;

  padding: 10px 30px;
  margin-bottom: 10px;
  border: 1px solid #333;
}

input {
  margin-right: 10px;
}

.remove-btn {
  border: none;
  background: red;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
}

.remove-line {
  text-decoration: line-through;
}
</style>
