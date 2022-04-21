import React from 'react'
import ListItem from '../ListItem/ListItem'
import "./List.scss"

function List({ messages }) {

    const listRender = messages.map(message => { 
        const { body, id, created_at} = message;
        return <ListItem body={body} id={id} created_at={created_at} />
    })
    
  return (
    <>{listRender}</>
  )
}

export default List