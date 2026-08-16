import AddIcon from "../EditIcons/AddIcon";
import DeleteIcone from "../EditIcons/DeleteIcon";

export default function TodoListItem({ todo }) {
    
    return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">

            <div>
                <input type="checkbox" />

                <p
                    className={`inline-block mt-1 ml-2 text-gray-600 ${todo.status ? 'line-through' : ''
                        }`}
                >
                    {todo.title}
                </p>
            </div>

            <button
                type="button"
                className="absolute right-0 flex items-center space-x-2"
            >
                <AddIcon />
                <DeleteIcone />
            </button>
        </li>
    )
}