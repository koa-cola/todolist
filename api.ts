import { todoListSchema } from './typings/schema';
import { ApiBase, apiFetch } from 'koa-cola';

export class GetTodoList extends ApiBase<
  {},
  {
    code: number;
    result: [todoListSchema];
  },
  {}
> {
  constructor(body) {
    super(body);
  }
  url: string = '/api/getTodoList';
  method: string = 'get';
}

export class CreateTodo extends ApiBase<
  { text: string },
  {
    code: number;
    result: todoListSchema;
  },
  {}
> {
  constructor(body) {
    super(body);
  }
  url: string = '/api/createTodo';
  method: string = 'post';
}

export class SetCompleted extends ApiBase<
  { _id: string; completed: boolean },
  {
    code: number;
    result: todoListSchema;
  },
  {}
> {
  constructor(body) {
    super(body);
  }
  url: string = '/api/setCompleted';
  method: string = 'get';
}
