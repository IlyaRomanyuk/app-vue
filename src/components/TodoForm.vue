<template>
    <form v-on:submit.prevent="createTodo">
        <input v-model="newTodo" type="text">
        <button type="submit">Создать</button>   
    </form>
</template>

<script>
export default {
  name: 'App',
  components: {  
  },
  data() {
      return {
          newTodo: ''
      }
  },
  methods: {
      createTodo() {
          if(this.newTodo.trim()) {
            this.$emit('create-todo', this.newTodo);
            this.newTodo = '';
          } else {
              alert('Введите задачу корректно')
          }
      }
  }
}
</script>

<style scoped>

</style>
