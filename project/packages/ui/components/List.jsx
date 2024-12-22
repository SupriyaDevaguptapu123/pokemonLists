import React, { useEffect } from 'react'

export const List = ({ data }) => {

  return (
    <>
      <p>List</p>
      <div className={'list'}>
        {data.map(item => (<div className={'list-item'} key={item.url}>{item.name}
        </div>))}
      </div>
    </>
  )

}