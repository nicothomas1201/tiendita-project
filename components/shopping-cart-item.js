import styled from 'styled-components'
import Image from 'next/image'
import SetAdd from './set-add'

const ShoppingCartItemStyled = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  color: var(--cocoabrown);
  padding: 1.5rem 1rem;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.05);

  .product-info{
    flex-grow: 1;

    .name{
      font: var(--body2-regular);
      margin: 0;
      margin-block-end: .5rem;
    }
    
    .price{
      font: var(--body2-bold);
      margin: 0;
    }
  }

`

function ShoppingCartItem({ product }) {
  let { name, url } = product
  let price = product.price.offert ? product.price.offert : product.price

  return (
    <ShoppingCartItemStyled>
      <Image src={url} alt="" width={64} height={64} />
      <div className="product-info">
        <h5 className="name">{name}</h5>
        <h5 className="price">{`$${price}`}</h5>
      </div>
      <SetAdd />
    </ShoppingCartItemStyled>
    
  )
}

export default ShoppingCartItem
