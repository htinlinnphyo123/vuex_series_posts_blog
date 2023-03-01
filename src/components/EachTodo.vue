<template>
    
    <div class="row gx-4">
      <div v-for="todo in myTodos" :key="todo.id" class="col-4" @dblclick="updateTodoFun(todo)">
        <div class="d-flex justify-content-between align-items-center px-4 my-2 cards" 
            :class="{'bg-success':todo.completed,'bg-primary':!todo.completed}">
          <span>
            {{ todo.id }} - {{todo.title}}        
          </span>
          <span role="button" @click="deleteTask(todo.id)">
            <i class="fa-solid fa-trash text-danger"></i>
          </span>
        </div>
      </div>
    </div>

</template>

<script>

import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'App',
  computed : {
    ...mapGetters(['myTodos'])
  },
  methods : {
    updateTodoFun(todo){
      todo.completed = !todo.completed;
      this.updateTask(todo)
    },
    ...mapActions(['getTodos','deleteTask','updateTask'])
  },
  mounted(){
    this.getTodos();
  }
}
</script>

<style>
.cards{
  min-height:70px;
  border-radius:7px;
}
</style>