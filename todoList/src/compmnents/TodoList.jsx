import TodoListItem from "./TodoListItem";

export default function TodoList({ todos }) {

    return (
        <ul className="list-reset">
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                />
                
            ))}
        </ul>
    )
}