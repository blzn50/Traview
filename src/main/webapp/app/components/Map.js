var React = require('react')

class Map extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const uluru = {lat: -25.363, lng: 131.044};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  render(){
    return (
      <div id='map' style={{'marginTop':'36px ',height:'330px'}}>
      </div>
    )
  }
}

module.exports = Map
