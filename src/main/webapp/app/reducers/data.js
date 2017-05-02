import {combineReducers} from 'redux';
import {SEARCH_REQUEST, SEARCH_SUCCESS,
        SEARCH_FAILED, RECOMMEND_SUCCESS,
        RECOMMEND_FAILED, RECOMMEND_REQUEST}
from '../actions/data';

export function searchedLocation(state={
  isFetching: false,
  fetched: false,
  items: [],
  error: ''
},action){
  switch (action.type){
    case SEARCH_FAILED:
      return Object.assign({},state,{
        searchedPlaces: Object.assign({},searchedPlaces,{
          isFetching: false,
          fetched: false,
          error: action.error
        })
      })
    case SEARCH_REQUEST:
      return Object.assign({},state,{
        searchedPlaces: Object.assign({},searchedPlaces,{
          isFetching: true,
          fetched: false
        })
      })
    case SEARCH_SUCCESS:
      return Object.assign({},state,{
        searchedPlaces: Object.assign({},searchedPlaces,{
          isFetching: false,
          fetched: true,
          items: action.payload
        })
      })
    default:
      return state
    }
  }
