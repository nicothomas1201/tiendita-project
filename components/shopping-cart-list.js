import styled from 'styled-components'
import ShoppingCartItem from './shopping-cart-item'
import { ButtonShopping } from './button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const ShoppingCartListStyled = styled.div`
  inline-size: 100%;
  


  .footer{
    /* inline-size: 100%; */
    padding: 1.5rem 1rem;
    background: var(--white);
    display: flex;
    flex-direction: column; 
    gap: 1rem;
    position: fixed;
    bottom: 0;
    right: 0;
    inline-size: 100%;
    max-inline-size: 35.125rem;
    box-sizing: border-box ;
    /* inline-size: 100%; */

    .delete-cart{
      font: var(--body2-regular);
      color: var(--boulder);
      margin: 0;
      cursor: pointer ;
      text-align: center; 
    }
  
  }

  @media screen and (min-width: 426px){
    .footer{
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

`

function ShoppingCartList({ cart, setCart }) {
  let [ total, setTotal ] = useState() 
  const router = useRouter()

  useEffect(() => {
    let prices = cart.map(( item  ) => item.price.offert ? item.price.offert : item.price )
    let total = prices.reduce(( prev, current ) => prev + current, 0)
    setTotal(total)
    console.log(total)
  }, [cart])



  function handleClick(){
    setCart([])
  }

  function handleClickPay(){
    router.push('/pay')
  }

  return (
    <ShoppingCartListStyled>
      { cart.map( (item, index) => <ShoppingCartItem setCart={setCart} product={item} key={index} /> )}
      <div className="footer">
        <h4 onClick={handleClick} className="delete-cart">Vaciar canasta</h4>
        <ButtonShopping onClick={handleClickPay} cuantity={cart.length} text="ir a pagar" price={`$${total}`} />
      </div>
    </ShoppingCartListStyled>
    
  )
}

export default ShoppingCartList
