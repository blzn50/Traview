import {REVIEW_REQUEST, REVIEW_SUCCESS,
        REVIEW_FAILED}
from '../actions/review';

//reducer to change the "submitReview" part of the state based on action dispatched
export function submitReview(state={
  isFetching: false,
  fetched: false
},action){
  switch (action.type){
    case REVIEW_FAILED:
      return Object.assign({},state,{
          isFetching: false,
          fetched: false
      })
    case REVIEW_REQUEST:
      return Object.assign({},state,{
        isFetching: true,
        fetched: false
      })
    case REVIEW_SUCCESS:
      return Object.assign({},state,{
        isFetching: false,
        fetched: true
      })
    default:
      return state
    }
  }
