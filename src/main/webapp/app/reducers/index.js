import {combineReducers} from 'redux'
import {loginUser, registerUser} from './authentication'
import {searchedLocation} from './data'
import {recommendLocation} from './data'
import {submitReview} from './review'

const rootReducer = combineReducers({loginUser,registerUser,
              searchedLocation,recommendLocation, submitReview})

export default rootReducer
