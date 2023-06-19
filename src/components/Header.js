import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd}) => {
  return (
    <header className='header'>
     <h1>{title}</h1> 
     <Button color='green' onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Mumba Tasks',
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}
//CSS in Js
//const headingStyle = {
  //  color: 'steelblue', 
    //backgroundColor: 'black'
//}
export default Header
