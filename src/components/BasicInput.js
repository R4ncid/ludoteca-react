import TextField from "@material-ui/core/TextField";
import React from "react";
import Grid from "@material-ui/core/Grid";


export default ({label, name, value, setter, xs, md, ...props}) => <Grid item xs={xs || 12} md={md || 6}><TextField
    {...props}
    fullWidth
    id={name}
    label={label}
    name={name}
    value={value}
    autoComplete={name}
    onChange={e => {
        setter(e.nativeEvent.target.value)
    }}
/></Grid>
