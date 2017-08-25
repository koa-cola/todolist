var {
  Controller,
  Get,
  Use,
  Param,
  Body,
  Delete,
  Put,
  Post,
  QueryParam,
  View,
  Ctx,
  Response
} = require('controller-decorators');
import Ok from '../responses/ok';

@Controller('')
export default class {
  @Get('/')
  @View('index')
  index() {}

  @Get('/official-demo')
  @View('officialDemo')
  officialDemo() {}

  @Get('/colastyle-demo')
  @View('colastyleDemo')
  colastyleDemo() {}

  @Get('/api/getTodoList')
  @Response(Ok)
  async getTodoList(@QueryParam() param: any) {
    var todoListManager = new app.managers.TodoListManager();
    return await todoListManager.getTodoList(param.status);
  }

  @Post('/api/createTodo')
  @Response(Ok)
  async createTodo(@Body() body: any) {
    var todoListManager = new app.managers.TodoListManager();
    return await todoListManager.createTodo(body);
  }

  @Get('/api/setCompleted')
  @Response(Ok)
  async setCompleted(@QueryParam() { _id, completed = true }: any) {
    var todoListManager = new app.managers.TodoListManager();
    return await todoListManager.setCompleted(_id, completed);
  }

  @Get('/api/deleteTodo')
  @Response(Ok)
  async smashTodo(@QueryParam() { _id }: any) {
    var todoListManager = new app.managers.TodoListManager();
    return await todoListManager.smashTodo(_id);
  }
}
