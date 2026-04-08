import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  max-width: 417px;
  width: 100%;
  position: relative;

  ${TagContainer} {
    display: flex;
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

export const CardInfo = styled.div`
  padding: 8px;
`

export const Title = styled.h4`
  font-size: 18px;
`

export const Ratings = styled.div`
  display: inline-flex;

  img {
    margin-left: 4px;
    width: 20px;
    height: 20px;
  }

  p {
    font-weight: 700;
    font-size: 18px;
  }
`

export const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.vermelho};
`
