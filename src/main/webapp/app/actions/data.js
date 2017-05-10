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


export function searchRequest(){
  return {
    type: SEARCH_REQUEST
  }
}

export function searchFailed(){
  return {
    type: SEARCH_FAILED
  }
}

export function searchSuccess(data){
  return {
    type: SEARCH_SUCCESS,
    payload: data
  }
}

export function detailRequest(){
  return {
    type: DETAIL_REQUEST
  }
}

export function detailFailed(){
  return {
    type: DETAIL_FAILED
  }
}

export function detailSuccess(data){
  return {
    type: DETAIL_SUCCESS,
    payload: data
  }
}

export function recommendRequest(){
  return {
    type: RECOMMEND_REQUEST
  }
}

export function recommendFailed(){
  return {
    type: RECOMMEND_FAILED
  }
}

export function recommendSuccess(data){
  return {
    type: RECOMMEND_SUCCESS,
    payload: data
  }
}

export function nearbyRequest(){
  return {
    type: NEARBY_REQUEST
  }
}

export function nearbyFailed(){
  return {
    type: NEARBY_FAILED
  }
}

export function nearbySuccess(data){
  return {
    type: NEARBY_SUCCESS,
    payload: data
  }
}

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


export function nearbyFetching(id){
  return (dispatch) => {
    dispatch(nearbyRequest())
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
        dispatch(nearbyFailed())
      }
    })
    .then(json => {
      dispatch(nearbySuccess(json))
    })
  }
}
