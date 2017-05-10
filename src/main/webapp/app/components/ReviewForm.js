var React = require('react')
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {submitReview} from '../actions/review'

class SubReviewForm extends React.Component{
  constructor(props){
    super(props)
    this.toggleForm = this.toggleForm.bind(this)
    this.submitReview = this.submitReview.bind(this)
    this.updateReview = this.updateReview.bind(this)
    this.updateRating = this.updateRating.bind(this)
    this.state = {
      formOn: false
    }
  }
  toggleForm(event){
    event.preventDefault()
    this.setState({
      formOn: !this.state.formOn,

    })
  }
  updateReview(event){
    event.preventDefault()
    this.setState({
      review: event.target.value
    })
  }
  updateRating(event){
    event.preventDefault()
    this.setState({
      rating: event.target.value
    })
  }
  submitReview(event){
    event.preventDefault()
    if (this.props.state.loginUser.fetched==true){
      const d = new Date()
      this.props.submitReview({
        rating: this.state.rating,
        user_comment: this.state.review,
        userid: localStorage.getItem('username'),
        place_id: this.props.item.placeId
      })
    }
    else{
      alert('You need to login to submit reviews.')
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.state.submitReview.fetched==true
        &&nextProps.state.submitReview.isFetching==false){
      alert('Your review is submitted. ')
    }
    else if(nextProps.state.submitReview.fetched==false
        &&this.props.state.submitReview.isFetching==true){
      alert('There are currently some errors. Please do it again other time.')
    }
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
              <span onClick={this.toggleForm} className="glyphicon glyphicon-remove text-center" id="cancel-review"
                style={{color:'#fff', margin:'0 auto'}}>
              </span>
            </button>
          </h3>
           <div id="SearchContainer">
            <form>
                <div className="group">
                    <input onChange={this.updateReview} type="text" id="LastName" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Your Review</label>
                </div>

                <div className="group">
                    <input onChange={this.updateRating} type="email" id="Email" required />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Rating</label>
                </div>
                <button onClick={this.submitReview} id="Send"> Submit Review </button>
            </form>
          </div>
        </div>)
        : <div></div> }
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
    submitReview: (review) => {
      dispatch(submitReview(review))
    }
  }
}

const ReviewForm = withRouter(connect(mapStateToProps,mapDispatchToProps)(SubReviewForm))

module.exports = ReviewForm
