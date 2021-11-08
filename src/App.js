import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";
import {Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Activation from "./MEMBER/Activation/Activation";
import MemberLogin from "./MEMBER/MemberLogin/MemberLogin";
import MemberHome from "./MEMBER/MemberHome/MemberHome";

const PrivateRoute = ({component: Component, ...rest}) => {
  // const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
      // logged
      true
          ? <Component {...props} />
          : <Redirect to='/login'/>
  )}/>
}

const UserRoute = ({component: Component, ...rest}) => {
  // const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
      // logged
      // AuthService.isLogged && AuthService.getType() === "user"
      true
          ? <Component {...props} />
          : <Redirect to='/user/login'/>
  )}/>
}

const App = () => {
  const [isLogged, setLogged] = useState(true);

  return (
      <>
        <Router>
          {/*<div className="main-container_">*/}
          <Switch>
            {/*<Route path="/" exact component={Home}/>*/}
            <Route
                path='/' exact
                render={(props) => (
                    <>
                      {isLogged ?
                          <MemberHome/> :
                          <MemberLogin isLogged={isLogged} setLogged={setLogged}/>}
                    </>
                )}
            />

            {/*<Route*/}
            {/*    path='/activate/:activation_code'*/}
            {/*    render={(props) => (*/}
            {/*        <Activation {...props}/>*/}
            {/*    )}*/}
            {/*/>*/}

            <Route path='/activate/:activation_code'>
              <Activation setLogged={setLogged} />
            </Route>


            {/*<Route path='/user/login' render={(props) => (*/}
            {/*    <Login {...props} isLogged={isLogged} setLogged={setLogged}/>*/}
            {/*)}/>*/}
            {/*    <div>*/}
            {/*        user login*/}
            {/*    </div>*/}
            {/*</UserRoute>*/}

            <UserRoute path="/user" exact/>
            {/*    <div>*/}
            {/*        user things*/}
            {/*    </div>*/}
            {/*</UserRoute>*/}

          </Switch>
          {/*</div>*/}
        </Router>

        {/*<Navigation isLogged={isLogged} setLogged={setLogged} testMethod={testMethod}/>*/}
        {/*<Container className="main-container">*/}
        {/*    <Switch>*/}
        {/*        /!* <Route path="/login" component={Login}/> *!/*/}
        {/*        /!* <Route path="/signup" component={Register} /> *!/*/}
        {/*        <Route*/}
        {/*            path='/login'*/}
        {/*            render={(props) => (*/}
        {/*                <Login {...props} isLogged={isLogged} setLogged={setLogged}/>*/}
        {/*            )}*/}
        {/*        />*/}
        {/*        <Route*/}
        {/*            path='/signup'*/}
        {/*            render={(props) => (*/}
        {/*                <Register {...props} isLogged={isLogged} setLogged={setLogged}/>*/}
        {/*            )}*/}
        {/*        />*/}
        {/*        <Route*/}
        {/*            path='/activate/:activation_code'*/}
        {/*            render={(props) => (*/}
        {/*                <Activation {...props}/>*/}
        {/*            )}*/}
        {/*        />*/}
        {/*        /!*<PrivateRoute path="/secret" component={Secret} />*!/*/}
        {/*        /!*<PrivateRoute path="/recommended" component={Recommendations} />*!/*/}
        {/*        /!*<PrivateRoute path="/movies" exact component={Movies} />*!/*/}
        {/*        /!*<Route path="/movies/:id" component={MovieDetails} />*!/*/}

        {/*        <Route path="/" component={Home}/>*/}
        {/*    </Switch>*/}

        {/*</Container>*/}
      </>
  );
}

export default App;