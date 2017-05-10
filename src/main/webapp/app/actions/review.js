import fetch from 'isomorphic-fetch'

export const REVIEW_REQUEST = 'REVIEW_REQUEST'
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS'
export const REVIEW_FAILED = 'REVIEW_FAILED'

export function reviewRequest(){
  return {
    type: REVIEW_REQUEST,
  }
}

export function reviewSuccess(){
  return {
    type: REVIEW_SUCCESS
  }
}

export function reviewFailed(){
  return {
    type: REVIEW_FAILED
  }
}

export function submitReview(review){
  return (dispatch) => {
    dispatch(reviewRequest())
    fetch('/review/create',{
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(response => {
      if(response.status===200){
        dispatch(reviewSuccess())
      }
      else{
        dispatch(reviewFailed())
      }
    })
  }
}
