import {combineReducers} from "redux";

import anagrafica from "./anagrafica";
import auth from "./auth";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({auth, anagrafica, form: formReducer})
