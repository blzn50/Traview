var React = require('react')
var NavBar = require('../components/NavBar')
var SearchBar = require('../components/SearchBar')

class FrontPageContainer extends React.Component{
  render(){
    return (
      <div>
        <NavBar />
		<div class="top animated fadeInDown">
                <p id="title"> Search Your Destination</p>
          </div>
        <SearchBar />
      </div>
    )
  }
}


module.exports = FrontPageContainer
