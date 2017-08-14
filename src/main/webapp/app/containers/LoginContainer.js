var React = require('react')
var LoginForm = require('../components/LoginForm')
import {browserHistory} from 'react-router'
import {loginUser} from '../actions/authentication'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class LoginContainerClass extends React.Component{
  constructor(props){
    super(props);
    //binding function to local 'this'
    this.toRegister = this.toRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  //log in
  handleLogin(event){
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.props.handleLogin(username,password)
  }
  //redirect to registration page
  toRegister(){
    event.preventDefault();
    this.props.router.push('/register');
  }
  //update component state with text field for inserting username
  onChangeUsername(event){
    event.preventDefault();
    this.setState({
      username: event.target.value
    })
  }
  //update component state with text field for inserting password
  onChangePassword(event){
    event.preventDefault();
    this.setState({
      password: event.target.value
    })
  }
  //re-render when there are changes in the props
  componentWillReceiveProps(nextProps){
    if (nextProps.state.loginUser.fetched==false
        && this.props.state.loginUser.isFetching==true){
        alert('Wrong username/password. Please try again.')
    }
    else if (nextProps.state.loginUser.fetched===true){
      localStorage.setItem('username',this.state.username);
      this.setState({
        username: '',
        password: '',
      })
      this.props.router.push('/')
    }
  }
  render(){
    return (
      <LoginForm
        onChangeUsername={this.onChangeUsername}
        onChangePassword ={this.onChangePassword}
        toRegister={this.toRegister}
        handleLogin={this.handleLogin}
      />
    )
  }
}

//mapping state to props
function mapStateToProps(state){
  return {
    state: state
  }
}

//mapping dispatcher to props
function mapDispatchToProps(dispatch){
  return {
    handleLogin: (username,password) => {
      dispatch(loginUser(username,password))
    }
  }
}

//connect to router
const LoginContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginContainerClass))

module.exports = LoginContainer
