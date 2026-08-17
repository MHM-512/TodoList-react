import EditIcon from "../EditIcons/EditIcon";
import DeleteIcone from "../EditIcons/DeleteIcon";
import { useState } from "react";

export default function TodoListItem({ todo, onToggleTodo, onDeleteTodo, onEditTodo , onaddTodo }) {

    const [editMode, setEditMode] = useState(false)

    return (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
         
            {
                editMode
                    ? <div className="w-full felx items-center">
                        <input
                            type="text"
                            defaultValue={todo?.title}
                            // ronChange={() => onToggleTodo(todo.id)}
                            className="w-full px-4 py-2 border "
                            onKeyDown={(event) => {
                                if(event.key === 'Enter'){
                                    onEditTodo( todo.id, event.target.value);
                                    setEditMode(false)
                                }
                            }}
                        />
                    </div>
                    : (
                        <div>
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
                                <EditIcon onClick={()=> setEditMode(true)}/>
                                <DeleteIcone onClick={() => onDeleteTodo(todo.id)} />
                            </button>
                        </div>
                    )
            }


        </li>
    )
}