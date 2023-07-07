export default {
    template: `
        <li>
            <div>
                <input type="checkbox" v-model="todo.complete">
                {{todo.name}}
                <button style="margin-left: 10px;" v-on:click="onDelete(todo.id)">delete</button> 
            </div>
        </li>

    `,

    props: {
        todo: {
            type: Object
        },
        onDelete: {
            type: Function
        }
    }
}