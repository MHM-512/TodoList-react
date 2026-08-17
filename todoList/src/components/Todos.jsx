import { useState } from "react";
import TodoList from "./TodoList";

export default function Todos() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Tailwind CSS To DO App List',
            status: true,
        },
        {
            id: 2,
            title: 'Tailwind CSS To DO App List',
            status: false,
        },
    ]);

    const [inputValue, setInputValue] = useState('')

    function addTodo() {
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            title: inputValue,
            status: false,
        };

        setTodos([...todos, newTodo]);

        setInputValue('');
    }
    // toggleTodo(checke)
    function toggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status: !todo.status,
                    }
                }
                return todo
            })
        )
    }

    // data delete
    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todos) => todos.id !== id)
        );
    };
    //data Edit 
    function editTodo(id, newTitle) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: newTitle
                    };
                }

                return todo;
            })
        );
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                addTodo();
                            }
                        }}
                        className="w-full px-2 py-3 border rounded outline-none border-gray-600" />
                </div>

                <TodoList
                    todos={todos}
                    onToggleTodo={toggleTodo}
                    onDeleteTodo={deleteTodo}
                    onEditTodo = {editTodo}
                    onaddTodo = {addTodo}
                />

            </div>
        </div>
    )
}