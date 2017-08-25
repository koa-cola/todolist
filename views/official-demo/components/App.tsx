import * as React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

import  'todomvc-app-css/index.css';
import '../../colastyle-demo/css/style.css';

const App = () =>
  <section className="todoapp">
    <div>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <VisibleTodoList />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  </section>;

export default App;
