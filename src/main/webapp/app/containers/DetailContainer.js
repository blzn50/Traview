var React = require('react')
var NavBar = require('../components/NavBar')
var Detail = require('../components/Detail')
var ReviewForm = require('../components/ReviewForm')
var Review = require('../components/Review')
var SearchBar = require('../components/SearchBar')
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {detailFetching} from '../actions/data'

class SubDetailContainer extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const placeId = this.props.location.state.item.placeId
    this.props.detailFetching(placeId)
  }
  render(){
    const reviews = this.props.state.detailLocation.places.reviewList
    return (
      <div>
      <NavBar />
      <SearchBar />
		<div id="main" className="detail_page">
			   <Detail />
        <div className="container-fluid review">

	        <div className="row review-row">

	        		<ReviewForm item={this.props.location.state.item} />
              {
                this.props.state.detailLocation.fetched===true
                ? (<div>
                  {
                  reviews.map(review => (
                  <Review review={review} />
                ))
              }
                  </div>
                  )
                : (
                  <div>
                    <p>There is no review about this place yet</p>
                  </div>
                )
              }
            }
	        </div>
	       </div>
	    </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    detailFetching: (id) => {
      dispatch(detailFetching(id))
    }
  }
}

const DetailContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubDetailContainer))

module.exports = DetailContainer
