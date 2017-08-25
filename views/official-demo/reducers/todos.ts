const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          _id: action._id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo._id === action._id
            ? { ...todo, completed: !todo.completed }
            : todo
      );
    case 'DEL_TODO':
      return state.filter(todo => todo._id !== action._id);
    case 'INIT_TODO':
      return action.data;
    default:
      return state;
  }
};

export default todos;
