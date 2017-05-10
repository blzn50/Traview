import {SEARCH_REQUEST, SEARCH_SUCCESS,
        SEARCH_FAILED, RECOMMEND_SUCCESS,
        RECOMMEND_FAILED, RECOMMEND_REQUEST, DETAIL_FAILED,
      DETAIL_REQUEST, DETAIL_SUCCESS, NEARBY_REQUEST,
    NEARBY_FAILED, NEARBY_SUCCESS}
from '../actions/data';

export function searchedLocation(state={
  isFetching: false,
  fetched: false,
  places: [],
  statusText: ''
},action){
  switch (action.type){
    case SEARCH_FAILED:
      return Object.assign({},state,{
          isFetching: false,
          fetched: false,
          statusText: 'Cannot find',
          places: []
      })
    case SEARCH_REQUEST:
      return Object.assign({},state,{
        isFetching: true,
        fetched: false,
        statusText: '',
        places: []
      })
    case SEARCH_SUCCESS:
      return Object.assign({},state,{
        isFetching: false,
        fetched: true,
        statusText: 'Found',
        places: action.payload
      })
    default:
      return state
    }
  }

export function recommendLocation(state={
    isFetching: false,
    fetched: false,
    places: [],
    statusText: ''
  },action){
    switch (action.type){
      case RECOMMEND_FAILED:
        return Object.assign({},state,{
            isFetching: false,
            fetched: false,
            statusText: 'No recommendation',
            places: []
        })
      case RECOMMEND_REQUEST:
        return Object.assign({},state,{
          isFetching: true,
          fetched: false,
          statusText: '',
          places: []
        })
      case RECOMMEND_SUCCESS:
        return Object.assign({},state,{
          isFetching: false,
          fetched: true,
          statusText: 'Recommendation fetched',
          places: action.payload
        })
      default:
        return state
      }
}

export function detailLocation(state={
      isFetching: false,
      fetched: false,
      places: {},
      statusText: ''
    },action){
      switch (action.type){
        case DETAIL_FAILED:
          return Object.assign({},state,{
              isFetching: false,
              fetched: false,
              statusText: 'No reviews',
              places: {}
          })
        case DETAIL_REQUEST:
          return Object.assign({},state,{
            isFetching: true,
            fetched: false,
            statusText: '',
            places: {}
          })
        case DETAIL_SUCCESS:
          return Object.assign({},state,{
            isFetching: false,
            fetched: true,
            statusText: 'Reviews fetched',
            places: action.payload
          })
        default:
          return state
        }
}


export function nearbyLocation(state={
      isFetching: false,
      fetched: false,
      places: [],
      statusText: ''
    },action){
      switch (action.type){
        case NEARBY_FAILED:
          return Object.assign({},state,{
              isFetching: false,
              fetched: false,
              statusText: 'No nearby',
              places: []
          })
        case NEARBY_REQUEST:
          return Object.assign({},state,{
            isFetching: true,
            fetched: false,
            statusText: '',
            places: []
          })
        case NEARBY_SUCCESS:
          return Object.assign({},state,{
            isFetching: false,
            fetched: true,
            statusText: 'Nearby fetched',
            places: action.payload
          })
        default:
          return state
        }
}
