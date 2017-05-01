var React = require('react')
var LoginForm = require('../components/LoginForm')
import {browserHistory} from 'react-router'

class LoginContainer extends React.Component{
  constructor(props){
    super(props);
    this.toRegister = this.toRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  toRegister(){
    event.preventDefault();
    browserHistory.push('/register');
  }
  onChangeUsername(event){
    event.preventDefault();
    this.setState({
      username: event.target.value
    })
  }
  onChangePassword(event){
    event.preventDefault();
    this.setState({
      password: event.target.value
    })
  }
  render(){
    return (
      <LoginForm
        onChangeUsername={this.onChangeUsername}
        onChangePassword ={this.onChangePassword}
        toRegister={this.toRegister}
      />
    )
  }
}

module.exports = LoginContainer
