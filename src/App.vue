<template>
  <div class="container-fluid">
    <h2 class="text-center my-4">All Todos</h2>
    <NewTodo></NewTodo>
    <FilterTodo></FilterTodo>
    <EachTodo></EachTodo>
  </div>
</template>

<script>
import EachTodo from "./components/EachTodo.vue";
import NewTodo from './components/NewTodo.vue';
import FilterTodo from './components/FilterTodo.vue';

export default {

  components : {EachTodo,NewTodo,FilterTodo}


}

</script>

<style>

</style>
