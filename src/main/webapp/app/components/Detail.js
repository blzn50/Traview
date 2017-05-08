var React = require('react')
var Map = require('../components/Map')
import {withRouter} from 'react-router'

function SubDetail(props){
  const stars = []
  for (var i=0; i<props.location.state.item.avgRating; i++){
    stars.push((<span className="glyphicon glyphicon-star"></span>))
  }
  for (var m=0; m<(5-props.location.state.item.avgRating);m++){
    stars.push((<span className="glyphicon glyphicon-star-empty"></span>))
  }
  return (
    <div>
    <div className="header" style={{marginTop:'30px'}} >
      <h1 style={{fontSize:'30px',marginBottom:'30px',marginLeft:'30px'}}> {props.location.state.item.placeName} &nbsp; &nbsp;
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
              <img style={{width:'100%',height:'auto'}} src={props.location.state.item.photos[0]} />
            </div>

            <div className="col-sm-6 detail-col-sm-6">
              <div style={{backgroundColor: '#fff',padding: '15px'}}>
                <h3 className="text-center"> {props.location.state.item.address} </h3>
                <p>
                </p>
              </div>
          <div className="well detail-well" style={{backgroundColor:'#fff'}}>
            <div>
              <Map lat={props.location.state.lat} lng={props.location.state.lng} />
            </div>

          </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const Detail = withRouter(SubDetail)

module.exports = Detail
