import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
import NuovaAnagrafica from "./pages/NuovaAnagrafica";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path={'/anagrafica/nuova'}>
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
        </BrowserRouter>
    );
}

export default App;
