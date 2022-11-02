import styled from 'styled-components'
import { Button, ButtonShopping} from './button'
import Icon from './icons'

const HeaderStyled = styled.div`

`

function Header() {
  // console.log(Buttons)

  return (
    <HeaderStyled>
      <Button text="text" />
      <Button text="text" icon={<Icon name="cart" />} />
      <ButtonShopping cuantity={1} text="ir a pagar" price="$17.48"/>
    </HeaderStyled>
    
  )
}

export default Header
