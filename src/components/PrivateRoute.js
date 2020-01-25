import {useSelector} from "react-redux";
import React from "react";
import {Redirect, Route} from "react-router-dom";

export default ({children, ...rest}) => {

    const user = useSelector(state => state.login.loggedIn)
    console.log(user)
    return <Route {...rest}>
        {user
            ? children
            : <Redirect to={{pathname: '/login'}}/>
        }
    </Route>

}
