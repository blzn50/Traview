var React = require('react')
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {searchFetching} from '../actions/data'
import SearchBox from './search-box';

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
    })
  }
  handleSearch(event){
    event.preventDefault()
    this.props.router.push('/result/' + this.state.query)
  }
  render(){
    return (
        <div id="main" className="main_search_bar">    
            <div className="top animated fadeInDown">
                <p id="title">Search Your Destination</p>
            </div>
            <div className="search_index top animated fadeInUp">
             <SearchBox onChange={this.onChange} handleSearch={this.handleSearch} />
            </div>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchFetching: (query) => {
      dispatch(searchFetching(query))
    }
  }
}

const SearchBar = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubSearchBar))

module.exports = SearchBar
