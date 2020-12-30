import {
    ADDITEMTOCART, REMOVEFROMCART,
    DECREMENTQTY, INCREMENTQTY, EMPTYCART
} from '../types';
const intialState = {
    myCart: []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADDITEMTOCART: {
            var newMyCart = [...state.myCart];
            const index = newMyCart.findIndex(item => item.id == action.payload.id)
            if (index < 0) {
                newMyCart.push({ ...action.payload, quantity: 1 })
            }
            else {
                newMyCart[index].quantity += 1;
            }
            return {
                ...state,
                myCart: newMyCart
            }
        }
        case REMOVEFROMCART: {
            var newMyCart = [...state.myCart];
            newMyCart = newMyCart.filter(item => action.payload.id != item)
            return {
                ...state,
                myCart: newMyCart
            }
        }
        case INCREMENTQTY: {
            var newMyCart = [...state.myCart];
            const index = newMyCart.findIndex(item => item.id == action.payload.id)
            newMyCart[index].quantity += 1;
            return {
                ...state,
                myCart: newMyCart
            }
        }
        case DECREMENTQTY: {
            var newMyCart = [...state.myCart];
            const index = newMyCart.findIndex(item => item.id == action.payload.id)
            if (newMyCart[index].quantity > 1)
                newMyCart[index].quantity -= 1;
            return {
                ...state,
                myCart: newMyCart
            }
        }
        case EMPTYCART: {
            return {
                ...state,
                myCart: []
            }
        }
        default:
            return state

    }
}
export default reducer;