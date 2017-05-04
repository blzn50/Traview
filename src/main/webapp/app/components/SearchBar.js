var React = require('react')
import {withRouter} from 'react-router'

class SubSearchBar extends React.Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      query: ''
    }
  }
  onChange(event){
    event.preventDefault()
    this.setState({
      query: event.target.value.replace(/ /g,"+")
    },()=>{console.log(this.state.query)})
  }
  handleSearch(event){
    event.preventDefault()
    this.props.router.push('/result/' + this.state.query)
  }
  render(){
    console.log(this.props)
    return (
        <div id="main" className="main_search_bar">
            <div className="search">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search your destination" name="srch-term"
                      onChange={this.onChange} id="srch-term" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"
                              onClick={this.handleSearch} name="search">
                              <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                </div>
            </div>
        </div>
      )
  }
}

const SearchBar = withRouter(SubSearchBar)

module.exports = SearchBar
