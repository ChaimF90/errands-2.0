import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import WelcomeScreen from './welcomeScreen/WelcomeScreen';
import RegisterPage from './newUser/NewUserPage'

class App extends React.Component<any, {}> {
  render() {
    return (
      <div>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/register" component={RegisterPage} />
      </div>
    );
  }
}

export default App;
