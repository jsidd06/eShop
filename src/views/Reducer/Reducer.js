// here we define all the application level states and define actions to make the changes to the state 

export const initialState = {
    basket : [],
}

// selector

export const getbasketTotal = (basket) => {
    return basket.reduce((amount,item) => item.price + amount,0);
}


const Reducer = (state,action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket : [...state.basket,action.item]
            }
        case "EMPTY_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            let newBasket = [...state.basket]
            if(index >= 0) {
                newBasket.splice(index,1);
            }else {
                console.warn(`cannot remove product (id: ${action.id}) as its not in basket`);
            }
            return {
                ...state,
                basket : newBasket
            }
        default:
            return state;
    }
}

export default Reducer;