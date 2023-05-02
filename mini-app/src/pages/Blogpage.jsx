import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Blogpage() {
  const [blogs, setPost]= useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  })
  return (
    <div>
      <h1>Blogpage</h1> 
    {
      blogs.map(blog => (
        <Link key={blog.id} to={`/blogs/${blog.id}`}>
          <li>{blog.title}</li>
        </Link>
      ))
    }
      
      </div>
  )
}
