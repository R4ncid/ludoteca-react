import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import Fab from "@material-ui/core/Fab";

import {Add} from "@material-ui/icons"
import {withNavbar} from "../components/Navbar";
import {useSelector} from "react-redux";
import ListItemLink from "../components/ListItemLink";
import {GridList, ListItemText} from "@material-ui/core";
import {Link, Redirect} from "react-router-dom";

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

const ListaAnagrafica = props => {
    const anagrafiche = useSelector(state => state.anagrafica.anagrafiche);

    const anagraficaList = anagrafiche.map((a, i )=> <ListItemText key={i} >{a.cognome} {a.nome}</ListItemText>)

    return <Grid container spacing={3}>
        <h1>Lista anagrafiche</h1>
        <Grid>
            <GridList>
                {anagraficaList}
            </GridList>
        </Grid>
        <Fab style={style} color="primary" aria-label="add" component={Link} to={"/anagrafica/nuova"} >
                <Add />
        </Fab>
    </Grid>

}

export default withNavbar("Ludoteca | Lista Anagrafiche")(ListaAnagrafica)
