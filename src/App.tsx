import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
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
