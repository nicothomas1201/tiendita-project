import styled from 'styled-components'
import Location from './location'
import Divider from './divider'
import { Button } from './button'
import Icon from './icons'
import { useCartContext } from '../contexts/cart-context'
import { useEffect, useState } from 'react'

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  position: relative;
  
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
  let { cart } = useCartContext()
  let [ active, setActive ] = useState(false)
  let [ size, setSize ] = useState()


  function handleClick(){
    setModal({
      type: 'location',
      show: true
    })
  }

  function handleClickShopping(){
    console.log('hola')
    setModal({
      type: 'cart',
      show: true,
    })
  }

  

  useEffect(() => {
    if( typeof window !== 'undefined'){
      let querie = window.matchMedia('(min-width: 620px)')
      if(querie.matches) {
        setActive(true)
      } else{
        setActive(false)
      }

      window.addEventListener('resize', (e) => setSize(e.target.innerWidth))
    }

  }, [size])

  

  return (
    <HeaderStyled>
      <h2 className='header-logo'>Tiendita</h2>
      <div className='header-actions'>
        <Location active={active} onClick={handleClick} location={address}/>
        { active ? <Divider /> : null }
        <Button onClick={handleClickShopping} text={cart.length} icon={<Icon name="cart" color="var(--white)" />}/>
      </div>
    </HeaderStyled>    
  )
}

export default Header
