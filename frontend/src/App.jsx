import { useEffect, useState } from 'react'
import './App.css'
import "./styles/topbar.css";
import "./styles/sidebar.css";
import "./styles/sub-window.css";
import { socket } from './socket';

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('Init');

  socket.on('connect', ()=>{
    console.log("Connected");
  })

  socket.on('update', (data)=>{
    console.log(data);
    setMessage( message + ' ' + data['hello']);
  })

  return (
    <div className="App">
      <div className='Topbar font-bold'>Topbar</div>
      <div className='flex flex-row'>
        <div className='flex-none w-32 font-bold text-center sidebar'>
            Sidebar
        </div>
        <div className='flex flex-wrap mt-2'>
          <div className='sub-window mr-4 rounded-lg p-3'>01</div>
          <div className='sub-window mr-4 rounded-lg p-3'>{message}</div>
        </div>
      </div>
      {/* <div className='flex flex-row'>
        <aside className='Sidebar'>Sidebar</aside>
        <main className='flex-col'>
          <div > 01</div>
          <div>02 </div>
          <div>03</div>

        </main>
      </div> */}
    </div>
  )
}

export default App
