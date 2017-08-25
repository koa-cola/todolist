export default class {
  async getTodoList(status = 0) {
    var TodoList = app.models.TodoList;
    var query: any = {};
    if (status) {
      query.completed = status == 2;
    }
    var result = await TodoList.find(query);
    return result;
  }

  async createTodo({ text }) {
    var TodoList = app.models.TodoList;
    var result = await TodoList.create({ text });
    return result;
  }

  async setCompleted(_id, completed = true) {
    var TodoList = app.models.TodoList;
    var result = await TodoList.update({ _id }, { $set: { completed } });
    return result;
  }

  async smashTodo(_id) {
    var TodoList = app.models.TodoList;
    var result = await TodoList.remove({ _id });
    return result;
  }
}
