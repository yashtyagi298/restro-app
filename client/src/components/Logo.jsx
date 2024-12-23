import React from 'react'

const Logo = ({className}) => {
  return (
    <div>
      <a href="/" className={`font-lobster text-2xl w-40 ${className}`}>
      HiraLaL Di <span className='text-primary'>Rasoi</span>
      </a>
    </div>
  )
}

export default Logo
