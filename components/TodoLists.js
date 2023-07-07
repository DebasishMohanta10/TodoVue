import Todo from "./Todo.js";
export default {
    template: `
        <div style="margin-top: 10px;" v-show="todos.length">
        <h5>{{title}} ({{todos.length}})</h5>
        <ol>
            <toDo v-for="todo in todos" :key="todo.id" :todo="todo" :onDelete='onDelete'></toDo>
        </ol>
    </div>
    `,

    props: {
        todos: {
            type: Array
        },
        title:{
            type: String,
            default: 'Incompleted Tasks'
        },
        onDelete:{
            type: Function
        }
    },

    components: {
        "toDo" : Todo,
    }
}