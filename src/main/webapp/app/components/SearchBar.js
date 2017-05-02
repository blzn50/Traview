var React = require('react')

function SearchBar(props){
  return (
      <div id="main" className="main_search_bar">
          <div className="search">
              <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search your destination" name="srch-term" id="srch-term" />
                      <div className="input-group-btn">
                          <button className="btn btn-default" type="submit" name="search">
                            <i className="glyphicon glyphicon-search"></i>
                          </button>
                      </div>
              </div>
          </div>
      </div>
    )
}

module.exports = SearchBar
