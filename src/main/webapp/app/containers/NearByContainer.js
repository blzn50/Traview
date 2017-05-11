var React = require('react')
var RecommendItem = require('../components/RecommendItem')
import {nearbyFetching} from '../actions/data'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

class SubNearbyContainer extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position=>{
      const loc = position.coords.latitude.toString() + ',' + position.coords.longitude.toString()
      this.props.nearbyFetching(this.props.keyword, loc)
    })
  }
  render(){
    return (
      <div>
      {this.props.state.nearbyLocation.places.length!==0
      ? (<div className="container-fluid explore">
        <h1> Places near you <span className="logo"> Traview</span></h1>
          <div className="row explore-row">
            {
              this.props.state.nearbyLocation.places.map(place=>(
                <RecommendItem item={place} />
              ))
            }
          </div>
          <hr style={{'backgroundColor':'rgba(0,0,0,0.4)', height:'2px'}} />
      </div>)
       : (<div><p style={{fontSize:'13px'}}>No place nearby found.</p></div>)
      }
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
    nearbyFetching: (keyword,latlng) => {
      dispatch(nearbyFetching(keyword,latlng))
    }
  }
}

const NearbyContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubNearbyContainer))

module.exports = NearbyContainer
