import { HeaderContainer, Title } from './styles'

import headerImg from '../../assets/fundoHero.png'
import logo from '../../assets/logo.png'

const Header = () => (
  <HeaderContainer style={{ backgroundImage: `url(${headerImg})` }}>
    <img src={logo} alt=" Logo Efood" />
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </HeaderContainer>
)

export default Header
