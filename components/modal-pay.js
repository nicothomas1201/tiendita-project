import styled from 'styled-components'
import Image from 'next/image'
import { Button } from './button'
import { useRouter } from 'next/router'
import { useCartContext } from '../contexts/cart-context'


const ModalPayStyled = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-direction: column;

  .title{
    font: var(--headline2);
    color: var(--cocoabrown);
    margin: 0;
  }
`

function ModalPay() {
  const router = useRouter()
  let { setCart } = useCartContext()

  function handleClick(){
    router.push('/')
    setCart([])
  }


  return (
    <ModalPayStyled>
      <Image src="/buying.png" alt="" width="510" height="284" />
      <h4 className="title">¡Gracias por tu compra!</h4>
      <Button text="Seguir Comprando" onClick={handleClick} />
    </ModalPayStyled>
    
  )
}

export default ModalPay
