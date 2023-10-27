import React,{useState} from 'react'
import './room.css'

function RoomDev() {
    const [light,setLight] = useState([])
   function addlight(){
    const id = light? light[light.length-1]+1 : 1
    setLight(()=>{
      return([...light,
      {
        id:id,
        Name:'LIGHT',
        checked:false
      }]
      )
    })
   }
  function plusFan(){
    const id = light? light[light.length-1]+1 : 1
    setLight(()=>{
      return([...light,
      {
        id:id,
        Name:'FAN',
        checked:false
      }]
      )
    })
   }
   const li = light.map((item,id)=>{return(
    <div className='lgdiv'>
    <h2>{item.Name}</h2>
   
    <label class="toggle-switch">
        <input key={id} type="checkbox"/>
        <span class="slider"></span>
    </label>
    </div>
) })
    
  return (
    <main className='lightfan'>
      <div className='buttongp'>
        <button className='btn1' onClick={()=>addlight()}>light</button>
        <button className='btn1' onClick={()=>plusFan()}>fan</button>
        </div>
        <div className='light'>{li}</div>
    </main>
  )
}

export default RoomDev