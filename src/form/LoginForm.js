import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React from "react";
import {makeStyles} from "@material-ui/core";
import {Field} from "redux-form";
import {email, minLength, required} from "./validation/validators"
import {renderTextField} from "./form-element";


const classes = makeStyles(theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    }
}))


export const validate = values => {
    const error = {}

    const requiredFields = ['email', 'password']

    requiredFields.forEach(label => {
        if (required(values[label])) {
            error[label] = required(values[label]);
        }
    });

    if (values.email && email(values.email)) {
        error.email = email(values.email)
    }

    if (minLength(8)(values.password)) {
        error.password = minLength(8)(values.password)
    }


    return error
};




export default ({onSubmit, ...props}) => <form className={classes.form} noValidate onSubmit={onSubmit}>

    <Field
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        component={renderTextField}
    />

    <Field
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        component={renderTextField}
    />

    <FormControlLabel
        control={<Checkbox value="remember" color="primary"/>}
        label="Remember me"
    />
    <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className=''
    >
        Sign In
    </Button>
    <Grid container>
        <Grid item xs>
            <Link href="#" variant="body2">
                Forgot password?
            </Link>
        </Grid>
        <Grid item>
            <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
            </Link>
        </Grid>
    </Grid>
</form>
