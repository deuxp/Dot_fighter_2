import React from 'react'
import './ListItem.scss'

function ListItem({ body, id, created_at }) {
    
    
  return (
    <li>
        <h2>message#: {id}</h2>
        <p className='created-at' >{created_at}</p>
        <p className='message-body' >{body}</p>
    </li>
  )
}

export default ListItem