import estrela from '../../assets/estrela.png'
import {
  Card,
  CardInfo,
  Description,
  Ratings,
  TagsWrapper,
  Title
} from './styles'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'

type Props = {
  image: string
  title: string
  rating: string
  description: string
  infos: string[]
}

const Restaurant = ({ image, title, rating, description, infos }: Props) => (
  <div className="container">
    <Card>
      <TagsWrapper>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </TagsWrapper>
      <img style={{ maxHeight: '217px', width: '417px' }} src={image} alt="" />
      <CardInfo>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title>{title}</Title>
          <Ratings>
            <p>{rating}</p>
            <img src={estrela} alt="Imagem estrela" />
          </Ratings>
        </div>
        <Description>{description}</Description>
        <ButtonLink to={'/perfil'} type="link">
          Saiba mais
        </ButtonLink>
      </CardInfo>
    </Card>
  </div>
)

export default Restaurant
