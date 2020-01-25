import {SALVA_ANAGRAFICA} from "../action/anagrafica";

const initialState = {
    anagrafiche: localStorage.getItem('anagrafiche') || [],
};


export default (state=initialState, action) => {
    console.log(state)
    if(action.type === SALVA_ANAGRAFICA){
        return {
            ...state,
            anagrafiche: [action.payload, ...state.anagrafiche],
        }
    }

    return state
}
