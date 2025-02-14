export const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || [];


export const CART_ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
}

export const updateLocalStorage = (state) =>{
    window.localStorage.setItem("cart", JSON.stringify(state)); 
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTIONS.ADD_TO_CART]:(state,action) =>{
        const{id} = action.payload
            const productInCartIndex = state.findIndex(item => item.id === id);

            if(productInCartIndex >= 0){
                //el 0 es una posicion no una cantidad
                //Si la funcion findIndex si entrega un indice del arreglo entonces si existe en el carrito

                //*Usando structuredClone: Mas legible

                // const newState = structuredClone(state);
                // newState[productInCartIndex].quantity+=1;

                //*Usando Map: Mas facil

                // const newState = state.map(item => {
                    // if(item.id == id){
                        // return{
                            // ...item, quantity: item.quantity += 1
                        // }
                    // }
                    // return item
                // })


                //*Usando el spread operator y el slice : Mas rapido
                const newState = [
                    ...state.slice8(0,productInCartIndex),
                    {...state[productInCartIndex], quantity: state[productInCartIndex].quantity +=1},
                    ...state.slice(productInCartIndex +1)
                ]

                updateLocalStorage(newState);
                return(newState);
            }

            const newState = [
                ...state,{...action.payload, quantity: 1}
            ]

            updateLocalStorage(newState);
            return newState
    },

    [CART_ACTIONS.REMOVE_FROM_CART]: (state, action) => {
        const {id} = action.payload;
        const newState = state.filter(item => item.id !== id);
        updateLocalStorage(newState);
        return newState
    },

    [CART_ACTIONS.CLEAR_CART]: () => {
        updateLocalStorage([])
        return [];
    }

}

export const cartReducer = (state, action) => {
    
    const {type: actionType} = action;
    const updateState = UPDATE_STATE_BY_ACTION[actionType]

    return updateState ? updateState(state,action) : state;
}
