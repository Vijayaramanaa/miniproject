import {React,useState} from 'react'
import './room.css'
import { useNavigate } from 'react-router-dom'


function Login(){
    const [mail,setMail] = useState('')
     const Navigate = useNavigate()
    return(
        <>
        <form className='Form' onSubmit={(e)=>e.preventDefault()}>
            <h1>Login </h1>
          <div className='fone'> <label className='lableone'>Enter your Mail id</label>
            <input
            type='mail'
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
            /></div> 
            <div className='fone'> <label>Enter your Password</label>
            <input/></div> 
             <h1>Forgot Password?</h1>
            <div className='btn'>
             <button  className='fbtn'>LogIn</button>
             <button  className='fbtn'onClick={()=>Navigate(-1)}>SignUp</button>
             </div>
        </form>
        </>
    )
}

export default Login;