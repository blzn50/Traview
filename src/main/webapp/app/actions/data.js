import fetch from 'isomorphic-fetch'

const API_URL = 'http://localhost:3000/api'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_FAILED = 'SEARCH_FAILED'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const RECOMMEND_REQUEST = 'RECOMMEND_REQUEST'
export const RECOMMEND_SUCCESS ='RECOMMEND_SUCCESS'
export const RECOMMEND_FAILED = 'RECOMMEND_FAILED'

export const DETAIL_REQUEST = 'DETAIL_REQUEST'
export const DETAIL_SUCCESS ='DETAIL_SUCCESS'
export const DETAIL_FAILED = 'DETAIL_FAILED'

export const NEARBY_REQUEST = 'DETAIL_REQUEST'
export const NEARBY_SUCCESS ='DETAIL_SUCCESS'
export const NEARBY_FAILED = 'DETAIL_FAILED'

//dispatch action for requesting a search
export function searchRequest(){
  return {
    type: SEARCH_REQUEST
  }
}

//dispatch action for failing a search
export function searchFailed(){
  return {
    type: SEARCH_FAILED
  }
}

//dispatch action for searching succeeded
export function searchSuccess(data){
  return {
    type: SEARCH_SUCCESS,
    payload: data
  }
}

//dispatch action for requesting details of search's result
export function detailRequest(){
  return {
    type: DETAIL_REQUEST
  }
}

//dispatch action for failling requesting details of search's result
export function detailFailed(){
  return {
    type: DETAIL_FAILED
  }
}

//dispatch action for successfully requesting details of search's result
export function detailSuccess(data){
  return {
    type: DETAIL_SUCCESS,
    payload: data
  }
}

//dispatch action for requesting recommendation based on the result
export function recommendRequest(){
  return {
    type: RECOMMEND_REQUEST
  }
}

//dispatch action for failling requesting recommendation based on the result
export function recommendFailed(){
  return {
    type: RECOMMEND_FAILED
  }
}

//dispatch action for successfully requesting recommendation based on the result
export function recommendSuccess(data){
  return {
    type: RECOMMEND_SUCCESS,
    payload: data
  }
}

//dispatch action for requesting nearby locations
export function nearbyRequest(){
  return {
    type: NEARBY_REQUEST
  }
}

//dispatch action for failling requesting nearby locations
export function nearbyFailed(){
  return {
    type: NEARBY_FAILED
  }
}

//dispatch action for successfully requesting nearby locations
export function nearbySuccess(data){
  return {
    type: NEARBY_SUCCESS,
    payload: data
  }
}

//thunk for the searching process
export function searchFetching(query){
  return (dispatch) => {
    dispatch(searchRequest())
    const uri = '/search?keyword=' + query;
    fetch(uri,{
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.status===200){
        return response.json()
      }
      else{
        dispatch(searchFailed())
      }
    })
    .then(json => {
      dispatch(searchSuccess(json))
    })
  }
}

//thunk for the process of fetching recommendation
export function recommendFetching(){
  return (dispatch) => {
    dispatch(recommendRequest())
    fetch(`/recommend`,{
      method: 'GET',
      credentials: 'include'
    })
    .then(response => {
      if(response.status===200){
        return response.json()
      }
      else{
        dispatch(recommendFailed())
      }
    })
    .then(json => {
      dispatch(recommendSuccess(json))
    })
  }
}

//thunk for fetching result's details
export function detailFetching(id){
  return (dispatch) => {
    dispatch(detailRequest())
    const uri = '/searchDetail?placeId=' + id
    fetch(uri,{
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.status===200){
        return response.json()
      }
      else{
        dispatch(detailFailed())
      }
    })
    .then(json => {
      dispatch(detailSuccess(json))
    })
  }
}

//thunks for fetching nearby location
export function nearbyFetching(keyword,latlng){
  return (dispatch) => {
    dispatch(nearbyRequest())
    const uri = '/nearBy?keyword=' + keyword + '&location=' + latlng
    fetch(uri,{
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.status===200){
        return response.json()
      }
      else{
        dispatch(nearbyFailed())
      }
    })
    .then(json => {
      dispatch(nearbySuccess(json))
    })
  }
}
