import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id : 1,
            name : 'Dharm',
            age : 28,
            skills : 'React'
        },
        {
            id : 2,
            name : 'bablu',
            age : 25,
            skills : 'JavaScript'
        },
        {
            id : 3,
            name : 'Sunil',
            age : 22,
            skills : 'NodeJS'
        },
        {
            id : 4,
            name : 'Harsh',
            age : 30,
            skills : 'MongoDB'
        }
    ]
    const personList = persons.map(person=> (
        <Person key={person.id} person={person} ></Person>
    ))
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList