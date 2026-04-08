import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  children: string
  title: string
  to?: string
  onClick?: () => void
}

const Button = ({ type, children, title, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer title={title} type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    )
  }
}

export default Button
