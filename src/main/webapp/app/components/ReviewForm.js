var React = require('react')

class ReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.toggleForm = this.toggleForm.bind(this)
    this.state = {
      formOn: false
    }
  }
  toggleForm(event){
    event.preventDefault()
    this.setState({
      formOn: !this.state.formOn
    })
  }
  render(){
    return (
      <div>

      <div style={{marginBottom: '15px',marginTop:'20px'}}>
        <button style={{marginLeft:'10px'}} className="btn btn-danger custom-className">REVIEWS
          <span className="badge">4</span></button>
        <button id="add-review" className="btn btn-primary custom-className"
          style={{borderRadius:'5px', paddingLeft: '5px', marginLeft: '10px'}}
          onClick={this.toggleForm} >
          <span className="glyphicon glyphicon-plus"></span>
          ADD REVIEW
        </button>
      </div>

      <div id="review-form" >
        <hr></hr>
        {
    this.state.formOn ? (
      <div id="SiteWrapper">
          <h3 className="text-center" style={{fontWeight:600,color: 'rgba(0,0,0,0.8)'}} >
            <span style={{
              textAlign: 'center',
              padding: '10px',
              margin: '0 auto',
              borderBottom: '1px solid #ff5c33'
            }} >		Add Review
            </span>
            <button style={{float:'right'}} type="button" className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove text-center" id="cancel-review"
                style={{color:'#fff', margin:'0 auto'}}>
              </span>
            </button>
          </h3>
           <div id="SearchContainer">
            <form>
                <div className="group">
                    <input type="text" id="review" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Your Review</label>
                </div>

                <div className="group">
                    <div className="dropdown">	
                        <a className="dropdown-toggle" data-toggle="dropdown">
                            <span>RATINGS</span>
                            <i className="caret"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                        </ul>
                    </div>
                </div>
                <button type="submit" id="Send"> Submit Review </button>
            </form>
          </div>
        </div>)
        : <div></div> }
      </div>
    </div>
    )
  }
}

module.exports = ReviewForm
