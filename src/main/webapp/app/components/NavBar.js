var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var Login = require('./Login')
var Register = require('./Register')
var Logout = require('./Logout')
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {withRouter} from 'react-router'
import {logoutUser} from '../actions/authentication'

class SubNavBar extends React.Component{
  constructor(props){
    super(props);
    //binding the function to the local "this"
    this.handleLogout = this.handleLogout.bind(this);
    this.toLogin = this.toLogin.bind(this)
    this.toRegister = this.toRegister.bind(this)
    this.toFrontPage = this.toFrontPage.bind(this)
  }
  //redirect to the route /login
  toLogin(event){
    event.preventDefault();
    this.props.router.push('/login');
  }
  //redirect to the route /register
  toRegister(event){
    event.preventDefault();
    this.props.router.push('/register');
  }
  //redirect to the front page
  toFrontPage(event){
    event.preventDefault();
    this.props.router.push('/');
  }
  //log out
  handleLogout(event){
    event.preventDefault();
    this.props.handleLogout();
  }
  //log out user using authentication part of the redux state
  componentWillReceiveProps(nextProps){
    if (nextProps.state.loginUser.fetched===false
      &&nextProps.state.loginUser.statusText==='Logged Out'){
      localStorage.clear();
    }
  }
  render(){
    return (
      <nav className="navbar navbar-default ">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a onClick={this.toFrontPage}
                    className="brightness" >
                    <img src="./app/images/traview_icon.png" alt="Traview_Icon" />
                    Traview
                  </a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                    {this.props.state.loginUser.fetched===true
                      ? (<ul className="nav navbar-nav">
                          <li style={{}}>
                          <a>Welcome, {localStorage.getItem('username')}</a>
                          </li>
                          <Logout handleLogout={this.handleLogout} />
                        </ul>)
                      : (<ul className="nav navbar-nav">
                          <Login toLogin={this.toLogin} />
                          <Register toRegister={this.toRegister} />
                        </ul>)
                    }
              </div>
          </div>
        </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

//mapping action dispatching to props
const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logoutUser())
    }
  }
}

//connect to router
const NavBar = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubNavBar))

module.exports = NavBar
