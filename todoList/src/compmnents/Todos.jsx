import { useState } from "react";
import TodoList from "./TodoList";

export default function Todos() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Tailwind CSS To DO App List 1',
            status: false,
        },
        {
            id: 2,
            title: 'Tailwind CSS To DO App List 2',
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
    // checke
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
                />

            </div>
        </div>
    )
}