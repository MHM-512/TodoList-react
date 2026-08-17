import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, onToggleTodo , onDeleteTodo }) {
    
    
    return (
        <ul className="list-reset">
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                />

            ))}
        </ul>
    )
}