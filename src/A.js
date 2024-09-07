import React, { createContext, useState } from 'react'
import B from './B'

export const UserContext = createContext();

const A = () => {
  const [user, setUser] = useState("Eva")
  return (
    <div className='box'>
        <h1>Componenta A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
        <B></B>
        </UserContext.Provider>
        
        
        </div>
  )
}

export default A