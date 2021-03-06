import {LOGIN_REQUEST, LOGIN_SUCCESS,
        LOGIN_FAILURE, LOGOUT,
        REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER}
from '../actions/authentication';

//reducer to change the authentication part of the state based on action dispatched
export function loginUser(state={
  isFetching: false,
  fetched: false,
  statusText: ''
}, action){
  switch (action.type){
    case LOGIN_REQUEST:
      return Object.assign({},state,{
        isFetching: true,
        statusText: 'Loggin In'
      })
    case LOGIN_FAILURE:
      return Object.assign({},state,{
        isFetching: false,
        fetched: false,
        statusText: 'Login failed'
      })
    case LOGIN_SUCCESS:
      return Object.assign({},state,{
        isFetching: false,
        fetched: true,
        statusText: 'Logged In'
      })
    case LOGOUT:
      return Object.assign({},state,{
        isFetching: false,
        fetched: false,
        statusText: 'Logged Out'
      })
    default:
      return state
  }
}

//reducer to change the "registerUser" part of the state based on action dispatched
export function registerUser(state={}, action){
  const user = {
    isFetching:false,
    fetched: false,
    statusText: ''
  }
  switch (action.type){
    case REGISTER:
      return Object.assign({},state,{
        user: Object.assign({},user,{
          statusText: 'Waiting for registration'
        })
      })
    case REGISTER_FAILURE:
      return Object.assign({},state,{
        error: action.payload.statusText,
        user: Object.assign({},user,{
          statusText: 'Register failed. Please try other username'
        })
      })
    case REGISTER_SUCCESS:
      return Object.assign({},state,{
        user: Object.assign({},user,{
          statusText: 'Successfully registered'
        })
      })
    default:
      return state;
  }
}
