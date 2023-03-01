import axios from "axios";

export default {
    state : {
        sayHello : 'Hello World',
        status : '',
        todos : [  ]
    },
    getters : {
        myTodos (state){
            if(state.status==='complete'){
                return state.todos.filter((t)=>{
                    return t.completed === true;
                })
            }else if(state.status === 'notcomplete'){
                return state.todos.filter((t)=>{
                    return t.completed === false;
                })
            }else{
                return state.todos;
            }
        }
    },
    mutations : {
        setTodos(state,todos){
            state.todos = todos
        },
        addNewTask(state,todo){
            state.todos.unshift(todo);
        },
        deleteTask(state,todo){
            state.todos = state.todos.filter((t)=>{
                return t.id !== todo
            })
        },
        updateTask(state,updateTodo){
            state.todos.map((t)=>{
                if(updateTodo.id==t.id){
                    t=updateTodo
                }
            })
        },
        filterByStatus(state,status){
            state.status = status;            
        },
        limitTask(state,todos){
            state.todos = todos;
        }
    
    },
    actions : {

        async getTodos({commit}){
            let req = await axios.get('https://jsonplaceholder.typicode.com/todos');
            let todos = req.data;
            commit('setTodos',todos)
        },
        async addNewTask(context,todo){
            let res = await axios.post('https://jsonplaceholder.typicode.com/todos',todo);
            console.log('hey')
            context.commit('addNewTask',res.data)
        },
        async deleteTask(context,removeId){
            let res = await axios.delete('https://jsonplaceholder.typicode.com/todos/'+removeId);
            context.commit('deleteTask',removeId)            
        },
        async updateTask(context,todo){
            let res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo);
            context.commit('updateTask',res.data)
        },
        async limitTask(context,limit){
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit='+limit);
            context.commit('limitTask',res.data)
        }


    }
}