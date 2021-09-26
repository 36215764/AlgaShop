import { createStore, combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import CalculatorReducer from './Calculator/Calculator.reducer'
import ProductsReducer from './Products/Products.reducer'
import storage from 'redux-persist/es/storage'

const rootReducer = combineReducers({
    calculator: CalculatorReducer,
    products: ProductsReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)