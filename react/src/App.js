import React from 'react';
import Users from './pages/Users';
import UserEdit from './pages/UserEdit';
import UserAdd from './pages/UserAdd';
import UserDetail from './pages/UserDetail';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <container>
        <Route exact path="/" component={Users} />
        <Route exact path="/user" component={Users} />
        <Route exact path="/user/:id" component={UserDetail} />
        <Route exact path="/useredit/:id" component={UserEdit} />
        <Route exact path="/adduser" component={UserAdd} />
      </container>
    </div>
  );
}
