import React from 'react'

const Alert = ({message, isActive}) => {
  console.log(isActive, 'pesan');
  return (
    <div className={`alert-wedding ${isActive ? 'show-alert' : ''}`}>
        {message}
    </div>
  )
}

export default Alert