var React = require('react')
var NavBar = require('../components/NavBar')
var SearchBar = require('../components/SearchBar')
var ResultItem = require('../components/ResultItem')
var RecommendContainer = require('./RecommendContainer')
var TopRatedContainer = require('./TopRatedContainer')
var Map = require('../components/Map')

class ResultContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div style={{paddingLeft:'80px',paddingRight:'80px'}}>
        <NavBar />
        <SearchBar />
        <div className="container-fluid service" id="service">
          <div className="row service-row">
            <div className="col-sm-5">
              <Map />
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
        </div>
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

module.exports = ResultContainer
