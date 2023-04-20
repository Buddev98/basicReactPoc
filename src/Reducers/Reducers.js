import { combineReducers } from "redux";
import { ProductsReducer, SelectedProductsReducer } from "./ProductReducer";


const Reducers = combineReducers({
    allProducts: ProductsReducer,
    product: SelectedProductsReducer
});

export default Reducers;