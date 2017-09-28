import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './home';
import Contact from './contact';
import User from './User';
import single_user from './single_user';
import single_expense from './single_expense';
import users from './users';
import login from './login';
import logout from './logout';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={App} />
    <Route path='contact' component={Contact} />
    <Route path='users_expenses' component={User} />
    <Route path='users' component={users} />
    <Route path='users/:id' component={single_user} />
    <Route path='users_expenses/:id' component={single_expense} />
    <Route path='login' component={login} />
    <Route path='logout' component={logout} />
    <Route path='*' component={Home} />
  </Route>
);