const initialState = { todo: [] };

const BanqueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { todo: [...state.todo, action.payload] };
    case "DELLET":
      const newTodo = state.todo.filter((ele) => ele.id !== action.payload);
      return { todo: [...newTodo] };
    case "DONE":
      const index = state.todo.findIndex((ele1) => ele1.id == action.payload);
      state.todo[index].done = !state.todo[index].done;
      return { todo: [...state.todo] };
    default:
      return state;
  }
};
export default BanqueReducer;
