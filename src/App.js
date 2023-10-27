
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Signup from './component/Signup';
import Home from './component/Home'
import Droom from './component/Droom';
import {useState} from 'react'
import RoomDev from './component/RoomDev';
import Login from './component/Login';
import Pnf from './component/Pnf';
import Profile from './component/Profile';

function App() {
  const [room,setRoom] = useState({
    id : 1,
    Name:''
  })
  const [card,setCard] = useState([])

  
  const handleAddCard = ()=>{
    setCard([...card,room]);
    const id =  room.id +1
    setRoom(
      {
        id :id,
        Name:''
      }
    );
  }
 
  return (
    <main className='App'>
       <Header/>
       <Routes>
       <Route path='Signup' element={<Signup/>}/>
       <Route path='Signup/Login' element={<Login/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='deviceroom' element={<RoomDev/>}/>
       <Route path='*' element={<Pnf/>}/>
       </Routes>
       <Profile/>
       {/*<Droom
       room={room}
       setRoom={setRoom}
       handleAddCard={handleAddCard}
       card={card}
       setCard={setCard}
       
  /> */}
    </main>
  );
}

export default App;
