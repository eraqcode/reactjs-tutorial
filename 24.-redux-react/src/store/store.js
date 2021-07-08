import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { TODO_REDUCER } from '../reducers/todoReducer'
import thunk from 'redux-thunk'
import { USERS_REDUCER } from '../reducers/usersReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    todo: TODO_REDUCER,
    users: USERS_REDUCER
});


export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);