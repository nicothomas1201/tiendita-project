import styled from 'styled-components'
import Location from './location'
import Divider from './divider'
import { Button } from './button'
import Icon from './icons'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;

  .header-logo{
    font: var(--logo-font);
    color: var(--orange);
    margin: 0;
  }

  .header-actions{
    display: flex;
    gap: 1rem;
  }

`

function Header({setModal, address}) {
  function handleClick(){
    setModal({
      type: 'location',
      show: true
    })
  }

  return (
    <HeaderStyled>
      <h2 className='header-logo'>Tiendita</h2>
      <div className='header-actions'>
        <Location onClick={handleClick} location={address}/>
        <Divider />
        <Button text={0} icon={<Icon name="cart" color="var(--white)" />}/>
      </div>
    </HeaderStyled>    
  )
}

export default Header
