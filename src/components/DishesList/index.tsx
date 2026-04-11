import Dish from '../Dish'
import { DishesContainer } from './styles'

const DishesList = () => (
  <div className="container">
    <DishesContainer>
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
    </DishesContainer>
  </div>
)

export default DishesList
