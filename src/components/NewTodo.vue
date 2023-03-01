<template>

    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Add new task" v-model="newTask.title">
        <button class="btn btn-outline-primary" type="button" @click="addTaskFun">Create</button>
    </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {

    data (){
        return {
            newTask : {
                title : '',
                completed : false,
                userId : 3
            }

        }
    },
    methods : { 
        addTaskFun(){
            this.addNewTask(this.newTask)
        },
        ...mapActions(['addNewTask'])
    },
    computed : mapGetters(['myTodos'])

}
</script>

<style>

</style>