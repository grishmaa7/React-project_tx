import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Home()
{

  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/child', {state: {name, age}});
  }
  return (
    <div>
      <h1> 🎀 Enter Your Details 🎀 </h1>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
