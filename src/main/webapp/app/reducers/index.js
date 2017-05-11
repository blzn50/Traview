import {combineReducers} from 'redux'
import {loginUser, registerUser} from './authentication'
import {searchedLocation} from './data'
import {recommendLocation} from './data'
import {submitReview} from './review'
import {detailLocation} from './data'
import {nearbyLocation} from './data'

const rootReducer = combineReducers({loginUser,registerUser,searchedLocation,
        recommendLocation, submitReview, detailLocation, nearbyLocation})

export default rootReducer
