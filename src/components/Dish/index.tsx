import { ButtonContainer } from '../Button/styles'
import pizza from '../../assets/pizza.png'
import { DishContainer } from './styles'

const Dish = () => (
  <DishContainer>
    <img src={pizza} alt="foto pizza" />
    <h4>Pizza</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque
      molestias, exercitationem suscipit tempore quam qui eum dignissimos
      similique perspiciatis quia itaque voluptatum, vel dolor est sequi
      voluptates nesciunt odit.
    </p>
    <ButtonContainer>Adicionar ao Carrinho</ButtonContainer>
  </DishContainer>
)

export default Dish
