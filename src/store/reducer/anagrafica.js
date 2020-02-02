import {SALVA_ANAGRAFICA} from "../action/anagrafica";

const initialState = {
    anagrafiche: localStorage.getItem('anagrafiche') || [{cognome: "tizio", nome: "caio"}],
};


export default (state=initialState, action) => {
    if(action.type === SALVA_ANAGRAFICA){
        return {
            ...state,
            anagrafiche: [action.payload, ...state.anagrafiche],
        }
    }

    return state
}
