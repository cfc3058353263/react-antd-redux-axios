import React, { useEffect } from 'react';
import './App.css';
import { Route, useLocation, Switch, Redirect, useHistory } from 'react-router-dom'
import router from './utils/router/router';
import Login from './components/login/login';
import Main from './components/main/main';
const App: React.FC = (props) => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('token')
    !token && history.push('/login')
  }, [])
  return (
    <div className="App">
      <Switch>
        {
          router.map((item, index) => {
            return (
              <Route key={index} path={item.path} component={item.componentName} exact={item.exact} />
            )
          })
        }
      </Switch>
    </div>
  );
}

export default App;
