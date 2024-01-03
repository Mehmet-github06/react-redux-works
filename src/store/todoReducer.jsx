import TodoList from "../components/todo/TodoList";

const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "learn Redux", complated: false },
  ],
};
/// typs
export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TGL = "CMP";

/// action create fuction

export const addTodo = (payload) => ({ type: ADD, payload });
export const clearTodo = () => ({ type: CLR });
export const deleteTodo = (payload) => ({ type: DEL, payload });
export const toggleTodo = (payload) => ({ type: TGL, payload });

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, complated: false },
        ],
      };
    case CLR:
      return initialState;
    case DEL:
        return {todoList:
            state.todoList.filter(todos=> todos.id !== payload)
          }
    case TGL:
      return {
        todoList: state.todoList.map((todos) =>
          todos.id === payload
            ? { ...todos, completed: !todos.completed }
            : todos
        ),
      };

    default:
      return state;
  }
};
