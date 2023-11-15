import React, {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

const PedidosState = props => {

    // Crear State inicial
    const initialState = {
        pedido: []
    }

    // use Reducer con dispatch para ejecutar las funciones
    const [ state, dispatch] = useReducer(PedidosReducer, initialState);

    return (
        <PedidoContext.Provider
            value={{
                pedido: state.pedido,
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidosState;