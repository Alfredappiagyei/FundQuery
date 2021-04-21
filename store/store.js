import {createStore, applyMiddleware} from 'redux';
import reducer from './authReducer';
import thunk from 'redux-thunk';
import {AsyncStorage } from 'react-native';
import {persistStore, persistReducer} from 'redux-persist'


const persistConfig={
    key:"root",
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer )

let store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)

export {store, persistor};