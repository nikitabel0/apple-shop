
import './App.css'

import { BrowserRouter, Routes,Route  } from 'react-router-dom'

import Home from './pages/Home'
import Card from './pages/Card/Card'


function App() {
  

  return (

      <>
      <Routes>
          <Route path="/" element = {<Home></Home>}/>
          <Route path='/card' element={<Card></Card>}></Route>
        </Routes>
        
       
      </>
      
    )
   
}

export default App
