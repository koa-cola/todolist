import { todoListSchema } from '../schemas/todoList';

var { model } = app.decorators.model;

@model(todoListSchema(app.mongoose))
export default class TodoList {}
