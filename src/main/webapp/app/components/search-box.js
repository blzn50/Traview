import React,{Component} from 'react';

class SearchBox extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="search">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter the Place" name="srch-term"
                      onChange={this.props.onChange} id="srch-term" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"
                              onClick={this.props.handleSearch} name="search">
                              <i className="glyphicon glyphicon-search" id="screenbg"><span className="search_big">Search</span></i>
                            </button>
                        </div>
                </div>
            </div>
        );
    }
}

export default SearchBox;