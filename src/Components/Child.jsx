import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Child() {
    const location = useLocation();
    const {name, age} = location.state || {} ;
  return (
      <>
    <div>
        <h1> 🎀 Entered Information 🎀</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
    </>
  )
}
