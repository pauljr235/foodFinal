import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  height: 24px;
  border: none;
`

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${cores.vermelho};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`
