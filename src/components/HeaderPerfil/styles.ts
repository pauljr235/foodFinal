import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainerP = styled.div`
  height: 150px;
  width: 100%;
  text-align: center;
  padding: 40px 0;
  background-size: cover;
  background-position: center;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  text-decoration: none;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const RestaurantsLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  text-decoration: none;
`
