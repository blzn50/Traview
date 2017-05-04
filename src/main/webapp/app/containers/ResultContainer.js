var React = require('react')
var NavBar = require('../components/NavBar')
var SearchBar = require('../components/SearchBar')
var ResultItem = require('../components/ResultItem')
var RecommendContainer = require('./RecommendContainer')
var TopRatedContainer = require('./TopRatedContainer')
var Map = require('../components/Map')
import {searchFetching} from '../actions/data'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {getLatLng} from '../helpers/googleapi'

class SubResultContainer extends React.Component{
  constructor(props){
    super(props)
    this.locationOnMap = this.locationOnMap.bind(this)
  }
  componentDidMount(){
    const query = this.props.routeParams.query
    this.props.searchFetching(query)
  }
  locationOnMap(){
    return getLatLng(this.props.searchedLocation.places[0].address)
  }
  render(){
    return (
        <div style={{paddingLeft:'80px',paddingRight:'80px'}}>
          <NavBar />
          <SearchBar />
          {this.props.state.searchedLocation.fetched===true
            ?( <div className="container-fluid service" id="service">
                <div className="row service-row">
                  <div className="col-sm-5">
                    <Map lat={this.locationOnMap().latitude}
                         lng={this.locationOnMap().longitude} />
                  </div>
                  <div className="col-sm-7">
                    <p className="text-center">Available places</p>
                    <ResultItem />
                    <ResultItem />
                    <ResultItem />
                    <ResultItem />
                    <ResultItem />
                    <div id="pagination" className="pagination"></div>
                  </div>
                </div>
                <hr style={{'backgroundColor': 'rgba(0,0,0,0.4)', height: '2px'}} />
              </div> )
             :(
               <Error message='No result was found '/>
             )}
          <TopRatedContainer />
          <RecommendContainer />
          <div className="jumbotron copyright">
            <p>Traview&copy; 2017 privacy policy</p>
          </div>
            <i className="arrow-up">
            <i className="fa fa-arrow-up" style={{'fontSize':'25px',color:'#fff','paddingTop':'12px','paddingLeft':'15px'}} aria-hidden="true"></i>
          </i>
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
    searchFetching: (query) => {
      dispatch(searchFetching(query))
    }
  }
}

const ResultContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubResultContainer))

module.exports = ResultContainer
