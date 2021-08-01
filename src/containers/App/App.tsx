import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Layout from '../Layout/Layout';
import Map from '../Map/Map';
import Sign from '../Sign/Sign';
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';

import useBootstrap from './useBootstrap';
import './App.css';

const App: React.FC = () => {
  const { isLogged } = useBootstrap();

  if (!isLogged) {
    return (
      <Sign>
        <Switch>
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Redirect to="/sign-in" />
        </Switch>
      </Sign>
    );
  }

  return (
    <Layout>
      <Map />
    </Layout>
  );
};

export default App;
