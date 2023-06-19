import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color}) => {
    const onAdd = () => {
        console.log('AddTask')
    }
  return (
  <button onClick={onAdd}style={{backgroundColor: color}} className='btn'>Add</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text:PropTypes.string,
    color: PropTypes.string,
}
export default Button
