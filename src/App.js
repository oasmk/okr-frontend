import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
// import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from "aws-amplify";
import { COGNITO } from "./config/aws";
import { sessionTime } from './views/config';
import { Auth } from 'aws-amplify';
import {token} from './views/config'
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";




Amplify.configure({
  aws_cognito_region: COGNITO.REGION,
  aws_user_pools_id: COGNITO.USER_POOL_ID,
  aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID, 
});

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Landing = React.lazy(() => import('./views/Landing/Landing'));
const Login = React.lazy(() => import('./views/pages/login/Login'));
const ChangePassword = React.lazy(() => import('./views/pages/login/ChangePassword'));
const Forgot = React.lazy(() => import('./views/pages/login/Forgot'));
const ForgotChange = React.lazy(() => import('./views/pages/login/ForgotChange'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

function App () {
  const history = useHistory();



    // session expire
    setTimeout(
      async function() {

        try {
          await Auth.signOut();
          localStorage.setItem('token', '');
          window.location.reload()
          history.push({
            pathname: '/login'
        });
          
      } catch (error) {
          console.log('error signing out: ', error);
      }
      }
      .bind(this),
      3600000
  );
    
 


    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/* <Route exact path="/landing" name="Landing Page" render={props => <Landing {...props}/>} /> */}
           <Route  exact path="/change_password" name="forgot change Page" render={props => <ForgotChange {...props}/>} /> 
           <Route  exact path="/password" name="password Page" render={props => <ChangePassword {...props}/>} /> 
              <Route exact path="/forgot" name="Forgot Page" render={props => <Forgot {...props}/>} />
          {!token &&  <Route name="Login Page" render={props => <Login {...props}/>} /> }
              {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
          {token &&   <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />   }
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  
}

export default App;
// export default withAuthenticator(App)
