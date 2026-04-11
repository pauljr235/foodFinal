import { Link } from 'react-router-dom'
import headerImg from '../../assets/fundoHero.png'
import logo from '../../assets/logo.png'
import { HeaderContainerP, RestaurantsLink } from './styles'

const HeaderPerfil = () => (
  <HeaderContainerP style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <RestaurantsLink to={'/'}>Restaurantes</RestaurantsLink>
      <img src={logo} alt=" Logo Efood" />
      <p>0 - produto(s) no carrinho</p>
    </div>
  </HeaderContainerP>
)

export default HeaderPerfil
