import styled from 'styled-components'
import TabOfferts from './tab-offerts'
import Image from 'next/image'
import { Button } from './button'
import { useCartContext } from '../contexts/cart-context'

const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem ;
  /* align-items: center; */
  inline-size: 100%;
  max-inline-size: 12.125rem;

  .image-product{
    /* border: 1px solid red; */
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .product-details{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-block-end: .5rem;
    flex: 1;

    .price{
      margin: 0;
      font: var(--body1-bold);
      color: var(--cocoabrown);

      .offert-price{
        color: var(--cocoabrown);
      }

      .before-offert{
        color:var(--boulder);
        text-decoration: line-through;
      }

    }

    .name{
      margin: 0;
      font: var(--body2-regular);
      color: var(--cocoabrown);
      flex: 1;
    }

    .und{
      display: flex;
      align-items: flex-end;
      flex: 1;
      font: var(--caption-regular);
      color: var(--boulder);
    }
  }

`

function ProductCard({product, setModal, setOneProduct}) {
  let {cart, setCart} = useCartContext()


  function handleClick(){
    setModal({
      type: 'product',
      show: true
    })

    setOneProduct({
      image: product.url,
      name: product.name,
      price: product.price,
    })
  }

  function handleAddCart(){
    setCart([...cart, product])
  }

  return (
    <ProductCardStyled>
      { product.price.offert && !product.popular ? <TabOfferts percentage={product.price.percentage} /> : null}
      <div className="image-product" onClick={handleClick}>
        <Image src={product.url} alt="" width={194} height={194} />
      </div>
      <div className="product-details">
        <h4 className="price">
          {
            product.price.offert ? (
              <>
                <span className="offert-price">{`$${product.price.offert}`}</span>
                <span className="before-offert">{`$${product.price.before_offert}`}</span>
              </>
            ) : `$${product.price}`
          }  
          
        </h4>
        <p className="name">{product.name}</p>
        {
          product.details ? <span className="und">{product.details}</span> : null
        }
      </div>
      <Button onClick={handleAddCart} className="product-button" text="Agregar" />
    </ProductCardStyled>
  )
}

export default ProductCard
