import fetch from 'isomorphic-fetch'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

const API_URL = 'http://localhost:8080/'

//action for requesting login
export function loginRequest(){
  return {
    type: LOGIN_REQUEST
  }
}

//action for login succeeded
export function loginSuccess(){
  return {
    type: LOGIN_SUCCESS
  }
}

//action for requesting registration
export function register(){
  return {
    type: REGISTER
  }
}

//action for register succeeded
export function registerSuccess(){
  return {
    type: REGISTER
  }
}

//action for failing registration
export function registerFailure(error){
  return {
    type: REGISTER_FAILURE,
    payload: error.response
  }
}

//action for failing logging in
export function loginFailure(){
  return {
    type: LOGIN_FAILURE
  }
}

//action for logging out
export function logout(){
  return {
    type: LOGOUT
  }
}

//thunk for process of registration
export function registerUser(username, password){
  return (dispatch) => {
    dispatch(register());
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

//thunk for process of logging in
export function loginUser(username,password){
  return (dispatch) => {
    //dispatch initial action and send request
    dispatch(loginRequest());
    fetch(`/login`,{
      method: 'POST',
      credentials: 'same-origin',
      body: createForm(username,password)
    })
    .then(response => {
      console.log(response.status)
      //dispatch action "success" if POST request succeeded
      if (response.status===200){
        console.log('success')
        dispatch(loginSuccess());
      }
      //dispatch action "loginFailure" if POST request failed
      else{
        console.log('failed')
        dispatch(loginFailure());
      }
      console.log(response);
    })
    //error handling, dispatch action "loginFailure"
    .catch(error => {
      console.log(error);
      dispatch(loginFailure(error))
    })
  }
}

//thunk for process of logging out
export function logoutUser(){
  return (dispatch) => {
    //send request to log out and dispatch corresponding action
    fetch('/logout',{
      method: 'POST',
      credentials: 'same-origin'
    })
    .then(response => {
      dispatch(logout())
    })
    .catch(error => {
      console.log(error)
    })
  }
}

//utility function for creating forms for POST request
function createForm(username,password){
  var form = new FormData();
  form.append('username',username);
  form.append('password',password);
  form.append('submit', 'login');
  console.log('key: '+ form.keys() + '; values: ' + form.values());
  return form;
}
