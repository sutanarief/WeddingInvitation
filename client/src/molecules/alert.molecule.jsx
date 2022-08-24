import React from 'react'

const Alert = ({message, isActive}) => {
  return (
    <div className={`alert-wedding ${isActive ? 'show-alert' : ''}`}>
        {message}
    </div>
  )
}

export default Alert