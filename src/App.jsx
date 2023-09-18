import { Outlet } from 'react-router-dom'
import '/src/App.css'
import Rodape from './Components/Rodape/rodape'
import Cabecalho from './Components/Cabecalho/cabecalho'
import Menu from './Components/Menu/menu'

function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
