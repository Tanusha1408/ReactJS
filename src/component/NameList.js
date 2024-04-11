import React from 'react'
import Person from './Person'


  //const names = ['tanu', 'havi', 'chinnu']
  //replace arrays names of person with array of list persons

function NameList() {
  const Persons = [
    {
      id: 1,
      name: 'tanu',
      age: 21,
      skill: 'React'
    },
    {
      id: 2,
      name: 'havi',
      age: 20,
      skill: 'Vue'
    },
    {
      id: 3,
      name: 'chinnu',
      age: 10,
      skill: 'Angular'
    }
  ]
  const PersonList = Persons.map(Person => <Person key={Person.name} Person={Person} />)
  return <div>{PersonList}</div>
}

export default NameList;