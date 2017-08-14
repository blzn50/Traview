var React = require('react');
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {loginSuccess} from '../actions/authentication'

class SubMain extends React.Component{
  constructor(props){
    super(props)
  }
  //auto login if the authentication session is still available
  componentDidMount(){
    if (localStorage.getItem('username')!==null){
        console.log('have cookie')
        this.props.autoLogin()
    }
  }
  //log out user and clear the localStorage in the browser to end the session
  componentWillReceiveProps(nextProps){
    if (nextProps.state.loginUser.fetched===false){
      localStorage.clear()
    }
  }
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

//map state to props
const mapStateToProps = state => {
  return {
    state: state
  }
}

//map dispatcher to props
const mapDispatchToProps = dispatch => {
  return {
    autoLogin: () => {
      dispatch(loginSuccess())
    }
  }
}

//connect to router
const Main = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubMain))

module.exports = Main
