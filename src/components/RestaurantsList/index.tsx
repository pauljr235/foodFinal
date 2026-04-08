import Restaurant from '../Restaurant'

import pizza from '../../assets/pizza.png'
import massa from '../../assets/massa.png'
import { Container } from './styles'

const RestaurantsList = () => (
  <div className="container">
    <Container>
      <Restaurant
        image={massa}
        title="La Dolvce Vita Trattoria"
        rating="4.9"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        infos={['Destaque da Semana', 'Japonesa']}
      />
      <Restaurant
        image={massa}
        title="La Dolvce Vita Trattoria"
        rating="4.9"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        infos={['Italiana']}
      />
      <Restaurant
        image={massa}
        title="La Dolvce Vita Trattoria"
        rating="4.9"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        infos={['Italiana']}
      />
      <Restaurant
        image={massa}
        title="La Dolvce Vita Trattoria"
        rating="4.9"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        infos={['Italiana']}
      />
      <Restaurant
        image={massa}
        title="La Dolvce Vita Trattoria"
        rating="4.9"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        infos={['Italiana']}
      />
      <Restaurant
        image={massa}
        title="La Dolvce Vita Trattoria"
        rating="4.9"
        description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        infos={['Italiana']}
      />
    </Container>
  </div>
)

export default RestaurantsList
