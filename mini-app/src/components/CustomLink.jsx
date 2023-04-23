import React from 'react'
import { Link , useMatch} from 'react-router-dom'

function CustomLink({children, to , ...props}) {
    const match = useMatch(to);
    console.log(match);
  return (
    <div>
        <Link to={to} {...props}>{children}</Link>
    </div>
  )
}

export default CustomLink