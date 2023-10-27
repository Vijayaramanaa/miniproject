import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  

  const [signDt,setSignDt] = useState({
    Name : '',
    Mail : '',
    Password : '',
    ConformPassword :''
  })
  const [webstore,setWebStore] = useState([])
  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setWebStore([...webstore, signDt]);
    localStorage.setItem('signupDetails', JSON.stringify([...webstore, signDt]));
    setSignDt({
      Name: '',
      Mail: '',
      Password: '',
      ConformPassword: ''
    });
  };
 

 
  return (
    <form className='formo' name='signup' onSubmit={handleSubmit} >
      
      <div className='Login'>
        <div className='lone'>
        <label>Enter your Name</label>
        <input
        required
        placeholder='Enter here' 
        type= 'text'
        value={signDt.Name}
        onChange={(e)=>{setSignDt({...signDt,Name:e.target.value})}}
        /></div>
        <div className='lone' >
        <label>Enter your Mail</label>
        <input
        required
        placeholder='Enter here' 
        type = 'mail' 
        value={signDt.Mail}
        onChange={(e)=>{setSignDt({...signDt,Mail:e.target.value})}}
        /></div>
        <div className='lone'>
        <label>Enter Password</label>
        <input
        required
        placeholder='Enter here' 
        type = 'password'
        value={signDt.Password}
        onChange={(e)=>{setSignDt({...signDt,Password:e.target.value})}}
        /></div>
        <div className='lone'>
        <label >Confrim Password</label>
        <input
        required
        placeholder='Enter here'  
        type = 'password'
        value={signDt.ConformPassword}
        onChange={(e)=>{setSignDt({...signDt,ConformPassword:e.target.value})}}
        />
        <div className='ltwo'>
        <button type='submit'  
        >Create</button>
        <button onClick={()=>Navigate('Login')}>SignUp ?</button>
        </div>
   
        </div>
        
        
        </div>
        
    </form>
  )
}

export default Signup