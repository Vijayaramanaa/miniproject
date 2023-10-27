import React from 'react'

export default function Room({card}) {
  return (
    <main className='room'>
      <div className='croom'>
      <h2>Welcome to room</h2>
      <div className='crs'>{card.map((content )=>{ return(
       <div className='card' key={content.id}>
        <h2>Room {content.id}</h2>
        <h2>{content.Name}</h2>
        </div>
      )})} 
      </div>
      </div>
    </main>
  )
}
