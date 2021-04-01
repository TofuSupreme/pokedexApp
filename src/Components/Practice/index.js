import React from 'react'
import PeopleDB from '../../DB/people'

const State = 'New York'
// State.includes('New')

const filteredList = PeopleDB.filter(
  people => people.address.filter(a => a.includes(State)).length > 0
)

const list = filteredList.map(t => <div key={t.id}>{t.name}</div>)

export default function People() {
  return <div>{list}</div>
}
