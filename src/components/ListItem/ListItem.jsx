import React from 'react'

function ListItem({ body, id, created_at }) {
    
    
  return (
    <article>
        <h2>message#: {id}</h2>
        <p>{created_at}</p>
        <p>{body}</p>
    </article>
  )
}

export default ListItem