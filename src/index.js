import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './index.css';
import store from './store'
import App from './App';
import Login from "./pages/Login";
import * as serviceWorker from './serviceWorker';
import Navbar from "./components/Navbar";
import NuovaAnagrafica from "./pages/NuovaAnagrafica";
import PrivateRoute from "./components/PrivateRoute";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                    <PrivateRoute path={'/anagrafica/nuova'} >
                        <NuovaAnagrafica/>
                    </PrivateRoute>


                    <PrivateRoute path={'/anagrafica'}>
                        <Navbar title={'Ludoteca | Lista Anagrafiche'}/>
                    </PrivateRoute>
                <Route path={'/login'}>
                    <Login/>
                </Route>
                <PrivateRoute path={'/'}>
                    <Navbar/>
                </PrivateRoute>

            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
