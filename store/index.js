import { combineReducers } from 'redux';
import userReducer from './reducers/user';
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers ({
    user: userReducer
})

// const store = createStore(rootReducer, composeWithDevTools);

const store = configureStore({
    reducer: rootReducer,
  })

export default store;
