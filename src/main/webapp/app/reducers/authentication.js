import {LOGIN_REQUEST, LOGIN_SUCCESS,
        LOGIN_FAILURE, LOGOUT,
        REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER}
from '../actions/authentication';

// const user = {
//   isFetching:false,
//   fetched: false,
//   token: '',
//   username: '',
//   statusText: ''
// }
//
// const INITIAL_STATE = {
//   error: '',
//   user: {
//     isFetching:false,
//     fetched: false,
//     token: '',
//     username: '',
//     statusText: ''
//   }
// }

export function loginUser(state={
  token: '',
  isFetching: false,
  fetched: false,
  username: '',
  statusText: ''
}, action){
  const user = {
    isFetching:false,
    fetched: false,
    token: '',
    username: '',
    statusText: ''
  }
  switch (action.type){
    case LOGIN_REQUEST:
      return Object.assign({},state,{
        user: Object.assign({},user,{
          isFetching:true,
          statusText: 'Logging in'
        })
      })
    case LOGIN_FAILURE:
      return Object.assign({},state,{
        error: action.payload.statusText,
        user: Object.assign({},user,{
          statusText: 'Login failed'
        })
      })
    case LOGIN_SUCCESS:
      return Object.assign({},state,{
        user: Object.assign({},user,{
          isFetching: false,
          fetched: true,
          statusText: "Logged in",
          username: action.payload.username,
          token: action.payload.token
        })
      })
    case LOGOUT:
      return Object.assign({},state,{
        user: Object.assign({},user,{
          statusText: 'Successfully logged out'
        })
      })
    default:
      return state
  }
}

export function registerUser(state={}, action){
  const user = {
    isFetching:false,
    fetched: false,
    token: '',
    username: '',
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
