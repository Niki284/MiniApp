import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditePost() {
    const {id} = useParams();
  return (
    <div>EditePost {id}</div>
  )
}
