import fetch from 'isomorphic-fetch'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

const API_URL = 'http://localhost:3000/api'

export function loginRequest(){
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(data){
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}

export function register(){
  return {
    type: REGISTER
  }
}

export function registerSuccess(){
  return {
    type: REGISTER
  }
}

export function registerFailure(error){
  return {
    type: REGISTER_FAILURE,
    payload: error.response
  }
}

export function loginFailure(error){
  return {
    type: LOGIN_FAILURE,
    payload: error.response
  }
}

export function logout(){
  return {
    type: LOGOUT
  }
}

export function registerUser(username, password){
  dispatch(register());
  return (dispatch) => {
    fetch(`${API_URL}/register`,{
      method: post,
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(() => {
      dispatch(registerSuccess());
    })
    .catch(error => {
      dispatch(registerFailure(error))
    })
  }
}

export function loginUser(username,password){
  dispatch(loginRequest());
  return (dispatch) => {
    fetch(`${API_URL}/login`,{
      method: post,
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      cookie.save('token', response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      dispatch(loginFailure(error))
    })
  }
}

export function logoutUser(){
  dispatch(logout());
  cookie.remove('token')
}
