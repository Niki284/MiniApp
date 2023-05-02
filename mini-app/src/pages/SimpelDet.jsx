import React  from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'


export default function SimpelDet() {
    const {id} = useParams();
    const [blog, setPost]= useState(null)
    useEffect(()=> {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
    }, [id])
  return (
    <div>
        <h1>SimpelDet</h1>

    <div className="postDetail">
        {blog && (
            <div className="postDetail--text">
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <Link to={`/blogs/${id}/edit`}>Edit this blog</Link>
            </div>
        )}
        
    </div>
        

    </div>
  )
}
