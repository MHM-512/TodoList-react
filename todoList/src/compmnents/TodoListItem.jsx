import EditIcon from "../EditIcons/EditIcon";
import DeleteIcone from "../EditIcons/DeleteIcon";

export default function TodoListItem({ todo, onToggleTodo }) {


    return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">

            <div>
                <input
                    type="checkbox"
                    checked={todo.status}
                    onChange={() => onToggleTodo(todo.id)}
                />

                <p
                    className={`inline-block mt-1 ml-2 text-gray-600 
                        ${todo.status ? 'line-through' : ''}`}
                >
                    {todo.title}
                </p>
            </div>

            <button
                type="button"
                className="absolute right-0 flex items-center space-x-2"
            >
                <EditIcon />
                <DeleteIcone />
            </button>
        </li>
    )
}