import React, { useContext } from 'react'
import { counterContext } from '../../../App'

function ComponentB() {
    const data = useContext(counterContext)
  return (
    <div>ComponentB  {data}</div>
  )
}

export default ComponentB