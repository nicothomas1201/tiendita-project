import styled from 'styled-components'
import { ButtonCloseModal } from './button'
import Icon from './icons'
import { useCartContext } from '../contexts/cart-context'
import NoProduct from './no-product'
import ShoppingCartList from './shopping-cart-list'

const ModalCartStyled = styled.div`
  background: var(--bg);
  inline-size: 100%;
  max-inline-size: 35.125rem;


  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    box-shadow: 0px -1px 0px 0px #0000000D inset;
    background: var(--white);
    .header-text{
      font: var(--body2-regular);
      margin: 0;

      .address{
        font: var(--body2-bold) ;
      }
    }
  }

  .cart-content{
    display: flex;
    block-size: 100%;

    ${({noProduct}) => {
      if(noProduct){
        return `
          justify-content: center;
          align-items: center;
        `
      }
    }}
  }

`

function ModalCart({closeModal, address}) {
  let { cart, setCart } = useCartContext()
  
  return (
    <ModalCartStyled noProduct={ cart.length === 0 ? true : false } >
      <div className="header">
        <h5 className="header-text">
          <span>Entregar en: </span>
          <span className="address">{address}</span>
        </h5>
        <ButtonCloseModal 
          icon={<Icon name="close" color="var(--white)" />}
          closeModal={closeModal}
        />
      </div>

      <div className="cart-content">
        {
          cart.length === 0 ? <NoProduct closeModal={closeModal} /> : <ShoppingCartList setCart={setCart} cart={cart} />
        }
        
      </div>
    </ModalCartStyled>
    
  )
}

export default ModalCart
