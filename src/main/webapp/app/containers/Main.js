var React = require('react');
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

function Ha(props){
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position);
  });
  console.log(props);
  return (
    <div>
      {props.children}
    </div>
  )
}

const mapStateToProps = state => {
  return state;
}

const Main = withRouter(connect(mapStateToProps)(Ha))

module.exports = Main
