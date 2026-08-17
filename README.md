                    Todos
                      │
              ┌───────┴────────┐
              │                │
            State            Functions
              │                │
              │        ┌───────┼────────┐
              │        │       │        │
              │      add     toggle   delete
              │        │       │        │
              └────────┴───────┴────────┘
                       │
                       ▼
                   TodoList
                       │
                     map()
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Item 1       Item 2       Item 3
          │            │            │
          ├─ toggle ───┤            │
          │            │            │
          └─ delete ───┴────────────┘
