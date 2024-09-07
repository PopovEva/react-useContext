import React, { useContext } from 'react'
import { UserContext } from './A'

const D = () => {
  const user= useContext(UserContext)
  return (
    <div className='box'>
    <h1>Componenta D</h1>
    <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default D