                         ┌─────────────┐
                         │   App.jsx   │
                         └──────┬──────┘
                                │
                                ▼
                         ┌─────────────┐
                         │  Todos.jsx  │
                         └──────┬──────┘
                                │
               ┌────────────────┼────────────────┐
               │                │                │
               ▼                ▼                ▼
             State          Functions           UI
               │                │                │
               │                │                │
        ┌──────┴──────┐    ┌────┴────────────┐   │
        │             │    │                 │   │
        ▼             ▼    ▼                 ▼   ▼
      todos      inputValue addTodo      toggleTodo
                                         deleteTodo
                                          editTodo
                                               │
                                               ▼
                                      ┌────────────────┐
                                      │   TodoList     │
                                      └───────┬────────┘
                                              │
                                             map()
                                              │
                  ┌───────────────────────────┼────────────────────┐
                  │                           │                    │
                  ▼                           ▼                    ▼
           TodoListItem                TodoListItem         TodoListItem
                  │
         ┌────────┼─────────┐
         │        │         │
         ▼        ▼         ▼
      Checkbox   Edit      Delete
         │        │         │
         │        │         │
         ▼        ▼         ▼
      toggle    edit      delete
         │        │         │
         └────────┼─────────┘
                  │
                  ▼
             Todos.jsx
                  │
                  ▼
              setTodos()
                  │
                  ▼
              Re-render
              
