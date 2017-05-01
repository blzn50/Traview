var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var Login = require('./Login')
var Register = require('./Register')
import {browserHistory} from 'react-router'

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  toLogin(event){
    event.preventDefault();
    browserHistory.push('/login');
  }
  toRegister(event){
    event.preventDefault();
    browserHistory.push('/register');
  }
  toFrontPage(event){
    event.preventDefault();
    browserHistory.push('/result');
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
                  <ul className="nav navbar-nav">
                    <Login toLogin={this.toLogin} />
                    <Register toRegister={this.toRegister} />
                  </ul>
              </div>
          </div>
        </nav>
    )
  }
}

module.exports = NavBar
