import * as actionTypes from '../actions/actionTypes';

const initialState ={

    ingredients:null,
        // salad:0,
        // bacon:0,
        // cheese:0,
        // meat:0,
    
    totalPrice:8,
    error:false,
    building:false,


};
const INGREDIENT_PRICES = {

    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon:0.7

}
const reducer = (state=initialState , action)=>{

    switch(action.type){

        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1

                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building:true,

            };
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] - 1

                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building:true,


            };
            case actionTypes.SET_INGREDIENT:
                return{
                    ...state,
                    ingredients:{
                        salad:action.ingredients.salad,
                        bacon:action.ingredients.bacon,
                        cheese:action.ingredients.cheese,
                        meat:action.ingredients.meat,

                    },
                    totalPrice: 8,
                    error:false,
                    building:false,

                };
            case actionTypes.SET_INGREDIENT:
                return{
                    ...state,
                    error:true,                    };               

        default:
            return state;
            
        return state;

        

    }

};


export default reducer;