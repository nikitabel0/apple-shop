import './App.css'
import { BrowserRouter, Routes,Route  } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products/products'
import Card from './pages/Card/Card'


function App() {
  

  return (

      <>
      <Routes>
          <Route path="/" element = {<Home></Home>}/>
          <Route path='/products/productDetails/:id' element={<Card></Card>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
        </Routes>
        
       
      </>
      
    )
   
}

export default App
