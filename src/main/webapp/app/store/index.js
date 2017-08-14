import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//addon logger for development process
const loggerMiddleware = createLogger();

//redux devtool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating redux store with initial state
export default function configureStore(initState){
  return createStore( rootReducer, initState,
    composeEnhancers(applyMiddleware(thunkMiddleware,loggerMiddleware))
  )
}
