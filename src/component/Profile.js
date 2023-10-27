import React, { useEffect,useState } from 'react'

function Profile() {
    const [Name,setName] = useState([])
    useEffect(()=>{
    const Name = localStorage.getItem('signupDetails')
    setName(Name)
    },[])

 return (
    <div>
        <h1>Name : {Name}</h1>
        <h1>Mail : {Name}</h1>
    </div>
  )
}

export default Profile