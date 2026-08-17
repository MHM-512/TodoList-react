
 function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }

        return todo;
      })
    );

  }

// data delete
    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todos) => todos.id !== item.id));
    };

