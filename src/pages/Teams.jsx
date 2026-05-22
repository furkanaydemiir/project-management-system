import React from 'react'
import { useSelector } from 'react-redux'

function Teams() {
  const teamMembers = useSelector((state)=>state.team)
  console.log(teamMembers);
  return (
    <div>Ekip Durumu...</div>

  )
}

export default Teams