var React = require('react')

function ResultItem(props){
  return (
    <div className="well">
        <p style={{display:'inline', 'paddingRight': '20px'}}>Kirstinmaki </p>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star-empty"></span>
            <span className="glyphicon glyphicon-star-empty"></span>
            <span className="glyphicon glyphicon-star-empty"></span>
            <span style={{float:'right'}}>
            <a style={{'marginLeft':'20px'}}  className="btn btn-xs btn-primary" href="#">More <span className="glyphicon glyphicon-chevron-right"></span></a>
        </span>
    </div>
  )
}

module.exports = ResultItem
