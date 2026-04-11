import bannerImg from '../../assets/apresentacao-fundo.png'
import { BannerContainer, BannerInfo } from './styles'

const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
    <BannerInfo className="container">
      <p>Italiana</p>
      <p>La Dolce Vita Trattoria</p>
    </BannerInfo>
  </BannerContainer>
)

export default Banner
