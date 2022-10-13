import React from 'react';


import './Backdrop.css';

const Backdrop = (props) => {
  const {onClick} = props
  return (
    <div className="backdrop" onClick={onClick}></div>
  )
}

export default Backdrop