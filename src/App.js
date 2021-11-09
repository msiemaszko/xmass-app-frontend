import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";
import {Container} from 'react-bootstrap'

import Login from './scenes/Login/Login';
import Home from './scenes/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Register from './scenes/Register/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ApiService from "./services/api-service";
import AuthService from './services/auth-service'
import Activation from "./MEMBER/Activation/Activation";
import MemberLogin from "./MEMBER/MemberLogin/MemberLogin";
import MemberHome from "./MEMBER/MemberHome/MemberHome";
import MemberNav from "./MEMBER/MemberNav/MemberNav";
import Snowfall from "react-snowfall";

const PrivateRoute = ({component: Component, ...rest}) => {
    // const [logged] = useAuth();

    return <Route {...rest} render={(props) => (
        // logged
        AuthService.isLogged
            ? <Component {...props} />
            : <Redirect to='/login'/>
    )}/>
}

const UserRoute = ({component: Component, ...rest}) => {
    // const [logged] = useAuth();

    return <Route {...rest} render={(props) => (
        // logged
        AuthService.isLogged && AuthService.getType() === "user"
            ? <Component {...props} />
            : <Redirect to='/user/login'/>
    )}/>
}

const App = () => {
    const [isLogged, setLogged] = useState(AuthService.isLogged());

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
                                <Snowfall />
                                <MemberNav isLogged={isLogged} setLogged={setLogged}/>
                                {isLogged ?
                                    <MemberHome/> :
                                    <MemberLogin isLogged={isLogged} setLogged={setLogged}/>}
                            </>
                        )}
                    />

                    <Route path='/activate/:activation_code'>
                        <Snowfall/>
                        <MemberNav isLogged={null} setLogged={null}/>
                        <Activation setLogged={setLogged} />
                    </Route>

                    {/*<Route*/}
                    {/*    path='/activate/:activation_code'*/}
                    {/*    render={(props) => (*/}
                    {/*        <Activation {...props}/>*/}
                    {/*    )}*/}
                    {/*/>*/}

                    {/*<Route path='/activate/:activation_code'>*/}
                    {/*    <Activation setLogged={setLogged} />*/}
                    {/*</Route>*/}


                    <Route path='/user/login' render={(props) => (
                        <Login {...props} isLogged={isLogged} setLogged={setLogged}/>
                    )}/>
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