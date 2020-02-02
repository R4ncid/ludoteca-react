import Grid from "@material-ui/core/Grid";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import itLocale from "date-fns/locale/it";
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {Field, reduxForm} from "redux-form";
import PrivateRoute from "../components/PrivateRoute";
import {renderDateField, renderTextField, renderTimeField} from "../form/form-element";
import Button from "@material-ui/core/Button";
import PresenzeForm from "../form/PresenzeForm";

const validate = values => {

    return {}
}

const submit = values =>{
    console.log(values)
}


const NuovaPresenza = props => {

    const {handleSubmit} = props;

    return <MuiPickersUtilsProvider utils={DateFnsUtils} locale={itLocale}>
        <Navbar title={'Ludoteca | Nuova Presenza'}/>
        <Container style={{marginTop: '70px'}}>
            <PresenzeForm onSubmit={handleSubmit(submit)}/>
        </Container>
    </MuiPickersUtilsProvider>
}

export default reduxForm(
    {
        form: 'nuova-presenza',
        validate
    }
)(NuovaPresenza)
