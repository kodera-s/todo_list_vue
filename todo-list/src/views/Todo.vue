<template>
  <div class="todo">
    <h1>This is ToDo Application</h1>
    <form @submit.prevent>
      <input type="text" v-model="newItem">
      <button @click="addItem">
        Add
      </button>
    </form>
    <ul class="toDoList">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.isDone">
        <span>{{index + 1}}</span>
        <span :class="{ done: todo.isDone }">{{todo.item}}</span>
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "TodoList",
  data (): any {
    return {
      newItem: '',
      todos: []
    }
  },
  methods: {
    addItem () {
      if (!this.newItem) return
      const todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem (index: number) {
      this.todos.splice(index, 1)
    }
  }
})
</script>

<style lang="scss" scoped>
.todo {
  .toDoList {
    list-style: none;
    .done {
      text-decoration: line-through;
    }
  }
}
</style>
