const todos = (state = [], action) => {
  switch (action.type) {
    case 'INIT_TODO':
      return action.data;
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
    default:
      return state;
  }
};

export default todos;
