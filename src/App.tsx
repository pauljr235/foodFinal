import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
