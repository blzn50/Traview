import fetch from 'isomorphic-fetch'

export const REVIEW_REQUEST = 'REVIEW_REQUEST'
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS'
export const REVIEW_FAILED = 'REVIEW_FAILED'

//dispatch action for requesting reviews
export function reviewRequest(){
  return {
    type: REVIEW_REQUEST,
  }
}

//dispatch action for successfully requesting reviews
export function reviewSuccess(){
  return {
    type: REVIEW_SUCCESS
  }
}

//dispatch action for failling requesting reviews
export function reviewFailed(){
  return {
    type: REVIEW_FAILED
  }
}

//dispatch action for submitting new review
export function submitReview(review){
  return (dispatch) => {
    //send initial request to submit new review
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
      //dispatch action "reviewSuccess" if request succeeded
      if(response.status===200){
        dispatch(reviewSuccess())
      }
      //dispatch action "reviewFailed" if request failed
      else{
        dispatch(reviewFailed())
      }
    })
  }
}
