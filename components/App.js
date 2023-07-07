import TodoLists from "./TodoLists.js";
export default {
    template: `
    <section>
        <h3>{{appname}}</h3>
    </section>
    <section>
        <form v-on:submit="addTodo">
            <input type="text" v-model="todoText" placeholder="What's on your mind?">

            <input type="submit" value="Add" style="margin-left: 5px;">
        </form>
        
        <todoLists :todos='remaining' :onDelete='deleteTodo'></todoLists>
        <todoLists :todos='done' title="Completed Tasks" :onDelete='deleteTodo'></todoLists>
        <button v-on:click="removeDones" v-show="done.length">Remove all Completed todos</button>
    
    </section>
    `,
    data(){
        return {
            appname: 'todoList App',
            todoText: '',
            todos: [],
            id: 0
        }
    },

    methods: {
        addTodo(e){
            e.preventDefault();
            this.todos.push({name: this.todoText,complete: false,id: ++this.id});
            this.todoText = '';
        },
        deleteTodo(id){
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        removeDones(){
            this.todos = this.todos.filter(todo => !todo.complete)
        }
    },
    computed: {
        remaining() {
            return this.todos.filter((t) =>! t.complete);
        },
        done(){
            return this.todos.filter((t)=> t.complete );
        }
    },

    components: {
        "todoLists" : TodoLists,
    }
}