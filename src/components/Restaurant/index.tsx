import estrela from '../../assets/estrela.png'
import { Card } from './styles'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'

type Props = {
    image: string
    title: string
    rating: string
    description: string

}

const Restaurant = ({ image, title, rating, description }: Props) => (
    <div className='container'>
        <Card>
            <img src={image} alt="" />
            <div>
                <h4>{title}</h4>
                <div>
                    <p>{rating}</p>
                    <img src={estrela} alt="Imagem estrela" />
                </div>
                <p>{description}</p>
                <ButtonLink to={'/'} type='link'>Saiba mais</ButtonLink>
            </div>
        </Card>

    </div>
)

export default Restaurant