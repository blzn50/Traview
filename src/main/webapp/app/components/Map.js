var React = require('react')

class Map extends React.Component{
  constructor(props){
    super(props)
  }
  /*utility function to generate the map of the searched location
  based on the passed down lat-long numbers using google map*/
  generateMap(lat,lng){
    const uluru = new google.maps.LatLng(lat,lng);
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
  //generate the map after the component is mounted
  componentDidMount(){
    this.generateMap(this.props.lat,this.props.lng)
  }
  //generate the map after components props are changed
  componentWillReceiveProps(nextProps){
    this.generateMap(nextProps.lat,nextProps.lng)
  }
  render(){
    return (
      <div id='map' style={{'marginTop':'36px ',height:'330px'}}>
      </div>
    )
  }
}

module.exports = Map
