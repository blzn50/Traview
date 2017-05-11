var React = require('react')

function Review(props){
  const stars = []
  for (var i=0; i<props.review.rating; i++){
    stars.push((<span className="glyphicon glyphicon-star"></span>))
  }
  for (var m=0; m<(5-props.review.rating);m++){
    stars.push((<span className="glyphicon glyphicon-star-empty"></span>))
  }
  return (
    <div className="well">
      <div>
        <strong style={{fontSize: '20px'}}></strong>
        &nbsp; &nbsp;
        {
          stars.map(star=>(
            star
          ))
        }
          </div>
          <p>
            <span className="glyphicon glyphicon-arrow-right"></span>
            {
              props.review.user_comment
            }
          </p>
    </div>
  )
}

module.exports = Review
