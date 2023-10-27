import React from 'react'
import Room from './Room';

export default function Droom({room,setRoom,handleAddCard,card,setCard}) {
   const handleSubmit = (e)=>{
    e.preventDefault();
    handleAddCard();
   }
   
  return (
    <div className='combine'>
    <div>
    <form className='dform'  onSubmit={handleSubmit}>
       <div className='ddiv'>
        <div className='dinput'>
        <h2>Create your Room</h2>
        <input  type='text'
        value={room.Name}
        onChange={(e)=>setRoom({...room,Name:e.target.value})}
        placeholder='Name the room'
        /></div>
        <div className='ddivt'>
        <button>Create</button>
        </div>
        </div>
    </form>
    </div>
    <div>
    <Room
       room={room}
       card={card}
       setCard={setCard}
       />
    </div>
    </div>
  )
}
