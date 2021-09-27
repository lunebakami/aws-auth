import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ConfirmRegistration from './pages/ConfirmRegistration';

import Header from './components/Header';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/login" component={SignIn} />
        <Route path="/confirm" component={ConfirmRegistration} />
      </Switch>
    </BrowserRouter>
  );
}
