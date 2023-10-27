import {CreateStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";  
import thunk from "redux-thunk" ;
import reducer from "./Reducer"
const midddleware = [thunk]
const store = CreateStore(
    reducer , 
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store ;
 