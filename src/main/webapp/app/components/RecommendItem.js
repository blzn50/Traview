var React = require('react')
import {withRouter} from 'react-router'

class SubRecommendItem extends React.Component{
  constructor(props){
    super(props)
    this.toDetail = this.toDetail.bind(this)
  }
  //redirect to the route /detail with data sent along
  toDetail(event){
    event.preventDefault()
    this.props.router.push({
      pathname: 'detail',
      state: {
        item: this.props.item
      }
    })
  }
  render(){
    return (
      <div onClick={this.toDetail} className="col-sm-3 col-md-3" >
          <img src={this.props.item.photos[0]} className="img img-responsive"
              style={{'backgroundSize':'cover no-repeat'}} />
              <p style={{textAlign:'center',fontSize:'13px'}}> {this.props.item.placeName} </p>
      </div>
    )
  }
}

const RecommendItem = withRouter(SubRecommendItem)

module.exports = RecommendItem
