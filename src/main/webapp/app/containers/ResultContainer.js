var React = require('react')
var NavBar = require('../components/NavBar')
var SearchBar = require('../components/SearchBar')
var ResultItem = require('../components/ResultItem')
var RecommendContainer = require('./RecommendContainer')
var NearByContainer = require('./NearByContainer')
var Error = require('../components/Error')
var Map = require('../components/Map')
import {searchFetching} from '../actions/data'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import SearchBox from '../components/search-box'



class SubResultContainer extends React.Component{
  constructor(props){
    super(props)
    //binding function to the local 'this'
    this.locationOnMap = this.locationOnMap.bind(this)
    //create state for the component
    this.state = {
      lat: null,
      lng: null
    }
  }
  //get search query from the route's parameters and send them along with action dispatcher
  componentDidMount(){
    const query = this.props.routeParams.query
    this.props.searchFetching(query)
  }
  //update component based on the status of the searching process
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    if (nextProps.state.searchedLocation.fetched === true
          && nextProps.state.searchedLocation.isFetching === false
          && nextProps.location.pathname===this.props.location.pathname
          && nextProps.state.searchedLocation.places.length!==0){
      this.locationOnMap(nextProps.state.searchedLocation.places[0].address)
    }
    else if (nextProps.location.pathname!==this.props.location.pathname){
      const query = nextProps.routeParams.query
      nextProps.searchFetching(query)
    }
  }
  /*utility function to take address and using it to search for
  corresponding lat-long number using google map api */
  locationOnMap(address){
      const encoded_address = address.replace(/ /g,"+")
      const uri = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encoded_address
      fetch(uri)
        .then(response => response.json())
        .then(function(json){
          this.setState({
            lat: json.results[0].geometry.location.lat,
            lng: json.results[0].geometry.location.lng
          })
        }.bind(this))
  }
  render(){
    return (
         <div>
          <NavBar />
          <SearchBar />
          <div id="main_result">
          {this.props.state.searchedLocation.places.length!==0 ? ( <div className="container-fluid service" id="service">
                <div className="row service-row">
                  <div className="col-sm-5">
                    <Map lat={this.state.lat} lng={this.state.lng} />
                  </div>
                  <div className="col-sm-7">
                    <p className="text-center">Available places</p>
                    {
                      this.props.state.searchedLocation.places.map(place=>(
                        <ResultItem lat={this.state.lat} lng={this.state.lng} item={place} />
                      ))
                    }
                    <div id="pagination" className="pagination"></div>
                  </div>
                </div>
                <hr style={{'backgroundColor': 'rgba(0,0,0,0.4)', height: '2px'}} />
              </div> )
             : (
               <Error message='No result was found '/>
             )}
          <RecommendContainer />
          {/* <NearByContainer keyword={this.props.routeParams.query} /> */}
          <div className="jumbotron copyright">
            <p>Traview&copy; 2017 privacy policy</p>
          </div>
            <i className="arrow-up">
                <i className="fa fa-arrow-up" style={{'fontSize':'25px',color:'#fff','paddingTop':'12px','paddingLeft':'15px'}} aria-hidden="true"></i>
            </i>
        </div>
        </div>
    )
  }
}

//mapping state to props
const mapStateToProps = state => {
  return {
    state: state
  }
}

//mapping dispatcher to props
const mapDispatchToProps = dispatch => {
  return {
    searchFetching: (query) => {
      dispatch(searchFetching(query))
    }
  }
}

//connect to router
const ResultContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubResultContainer))

module.exports = ResultContainer
