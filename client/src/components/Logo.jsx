import React from 'react'

const Logo = ({className}) => {
  return (
    <div>
      <a href="/" className={`font-lobster text-2xl flex items-center${className}`}>
      HiraLaL <p className='ml-1'>Di</p> <span className='text-primary ml-1.5'>Rasoi</span>
      </a>
    </div>
  )
}

export default Logo
