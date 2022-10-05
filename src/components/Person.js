import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>I am {person.name}. My age is {person.age}. I have Knowledge of {person.skills}</h2>
    </div>
  )
}

export default Person