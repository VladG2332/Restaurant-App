import React, {useReducer} from 'react';

import firebaseapp from '../../firebase'
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

const FirebaseState = props => {

    console.log(firebaseapp);

    // Crear State inicial
    const initialState = {
        menu: [],
    }

    // use Reducer con dispatch para ejecutar las funciones
    const [ state, dispatch] = useReducer(FirebaseReducer, initialState);

    return (
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebaseapp
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
} 

export default FirebaseState;