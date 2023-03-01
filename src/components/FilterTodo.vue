<template>
    
    <div class="d-flex justify-content-between mb-3">
        <div>
            <span class="">
                By Status : {{selectComplete}}
            </span>
            <select class="form-select" v-model="selectComplete" @change="filterByStatus(selectComplete)">
                <option value="" selected disabled>Choose option</option>
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="notcomplete">Not Complete</option>
            </select>
        </div>
        <div>
            <span>
                Limit - {{limit}}
            </span>
            <select class="form-select" v-model="limit" @change="limitTask(limit)">
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
            </select>
        </div>
    </div>

</template>

<script>
import { mapMutations,mapActions } from 'vuex';

export default {
    data (){
        return {
            selectComplete : '',
            limit : ''
        }
    },
    methods : {

        ...mapMutations(['filterByStatus']),
        ...mapActions(['limitTask'])
    
    }


}
</script>

<style>

</style>