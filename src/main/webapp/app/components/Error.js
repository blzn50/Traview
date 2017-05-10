var React = require('react')

function Error(props){
  return (
    <div style={{
      fontSize: '30px',
      textAlign: 'center',
      position: 'relative',
      margin: '0px auto',
    }}>
      <p> {props.message} </p>
    </div>
  )
}

module.exports = Error
