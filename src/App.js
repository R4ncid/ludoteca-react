import React from 'react';
import PrivateRoute from "./components/PrivateRoute";
import NuovaAnagrafica from "./pages/NuovaAnagrafica";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import PresenzaNuova from "./pages/PresenzaNuova";
import Presenze from "./pages/Presenze";
import ListaAnagrafica from "./pages/ListaAnagrafiche";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path={'/anagrafica/nuova'}>
                    <NuovaAnagrafica/>
                </PrivateRoute>
                <PrivateRoute path={'/anagrafica'}>
                    <ListaAnagrafica />
                </PrivateRoute>
                <PrivateRoute path={'/presenze/nuova'}>
                    <PresenzaNuova/>
                </PrivateRoute>
                <PrivateRoute path={'/presenze'}>
                    <Navbar title={'Ludoteca | Presenze'}/>
                    <Presenze/>
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
