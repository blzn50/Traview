var React = require('react')
var RecommendItem = require('../components/RecommendItem')
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {recommendFetching} from '../actions/data'

class SubRecommendContainer extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    if (this.props.state.loginUser.fetched==true){
      this.props.recommendFetching();
    }
  }
  render(){
    return (
      <div>
      {this.props.state.recommendLocation.fetched==true||this.props.state.recommendLocation.places.length!==0
      ? (
        <div className="container-fluid explore" id="recommended">
            <h1>RECOMMENDED PLACES FOR YOU</h1>
            <div className="row explore-row">
              {
                this.props.state.recommendLocation.places.map(recommendation=>(
                  <RecommendItem item={recommendation} />
                ))
              }
            </div>
            <hr style={{'backgroundColor':'rgba(0,0,0,0.4)', height:'2px'}} />
        </div>
      )
      : (
        <div>
          <p style={{fontSize:'20px'}}>
            Log in to enable recommendation feature
          </p>
        </div>
      )}
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
    recommendFetching: (review) => {
      dispatch(recommendFetching())
    }
  }
}

const RecommendContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubRecommendContainer))

module.exports = RecommendContainer
