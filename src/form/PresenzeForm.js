import Grid from "@material-ui/core/Grid";
import {Field} from "redux-form";
import {renderDateField, renderTextField, renderTimeField} from "./form-element";
import Button from "@material-ui/core/Button";
import React from "react";

export default ({onSubmit}) => <form noValidate onSubmit={onSubmit}>
    <Grid alignItems={"center"} container justify={"space-around"} spacing={3}>
    <Grid item xs={12} md={6}>
        <Field
            id="giorno"
            label="Giorno"
            name="giorno"
            component={renderDateField}

        />
    </Grid>
    <Grid item md={6}>
        <Field
            id="ora-ingresso"
            label="Ora Ingresso"
            name="oraIngresso"
            component={renderTimeField}
            required
        />
    </Grid>
    <Grid item md={6}>
        <Field
            id="ora-uscita"
            label="Ora Uscita"
            name="oraUscita"
            component={renderTimeField}
            required
        />
    </Grid>
    <Grid item md={6}>
        <Field
            id="note"
            label="Note"
            name="note"
            component={renderTextField}
            multiline
            rows={4}
        />
    </Grid>
    <Grid item xs={12}>
        <Button variant="contained" color="primary" type="submit">
            Salva
        </Button>
    </Grid>

</Grid></form>
