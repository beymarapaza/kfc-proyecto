import { BrowserRouter } from 'react-router-dom'
import Rutas from './components/Rutas'
import './App.css'
import Nav from './components/Nav'

function App() {


  return (
    <>
      <BrowserRouter>

        <div className='container-fluid'>
          <Nav />
          <Rutas />
        </div>

      </BrowserRouter>

    </>
  )
}

export default App
