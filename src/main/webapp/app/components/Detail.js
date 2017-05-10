var React = require('react')
var Map = require('../components/Map')
import {withRouter} from 'react-router'

class SubDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      lng: null
    }
  }
  componentDidMount(){
    const address = this.props.location.state.item.address
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
    const stars = []
    for (var i=0; i<this.props.location.state.item.avgRating; i++){
      stars.push((<span className="glyphicon glyphicon-star"></span>))
    }
    for (var m=0; m<(5-this.props.location.state.item.avgRating);m++){
      stars.push((<span className="glyphicon glyphicon-star-empty"></span>))
    }
    return (
      <div>
      <div className="header" style={{marginTop:'30px'}} >
        <h1 style={{fontSize:'30px',marginBottom:'30px',marginLeft:'30px'}}> {this.props.location.state.item.placeName} &nbsp; &nbsp;
          {
            stars.map(star=>(
              star
            ))
          }
        </h1>
      </div>
          <div className="container-fluid detail">
            <div className="row detail-row">
              <div className="col-sm-6 image-col-sm-6">
                <img style={{width:'100%',height:'auto'}} src={this.props.location.state.item.photos[0]} />
              </div>

              <div className="col-sm-6 detail-col-sm-6">
                <div style={{backgroundColor: '#fff',padding: '15px'}}>
                  <h3 className="text-center"> {this.props.location.state.item.address} </h3>
                  <p>
                  </p>
                </div>
            <div className="well detail-well" style={{backgroundColor:'#fff'}}>
              <div>
                <Map lat={this.state.lat} lng={this.state.lng} />
              </div>

            </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const Detail = withRouter(SubDetail)

module.exports = Detail
