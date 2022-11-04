import styled from 'styled-components'
import Image from 'next/image'
import InputSelect from './input-select'
import { Button } from './button'
import SetAdd from './set-add'
import SectionProducts from './section-products'
import { useState, useEffect } from 'react'
import db from '../db'

const ModalProductStyled = styled.div`
  overflow: auto;
  block-size: 420px;

  .product-container{
    display: flex;
    gap: 1.5rem;
    inline-size: 100%;

    .product-details{
      color: var(--cocoabrown);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-grow: 2;


      .title-name{
        font: var(--headline1);
        margin: 0;
      }

      .price{
        margin: 0;
        font: var(--headline2);
      }

      .caption-description{
        color: var(--cocoabrown);
        .caption{
          margin: 0;
          font: var(--caption-regular);
          margin-block-end: .5rem;
        }

        .description{
          margin: 0;
          font: var(--body1-regular);
        }
      }

      .select{
        margin-block-start: 3.125rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;


        .select-title{
          font: var(--body1-bold);
          color: var(--cocoabrown);
          margin: 0;
        }

        .select-actions{
          display: flex;
          align-items: center ;
          justify-content: space-between;
          gap: 2.5rem;

          button{
            flex: 1;
          }
        }
      }
    }
  }

  .sugest-products{
    margin-block-start: 2.5rem;
  }

`

function ModalProduct({product}) {
  let [ products, setProducts ] = useState(db)

  useEffect(() => {
    let sugestProudcts = products.filter( item => item.price.offert)
    setProducts(sugestProudcts)
  }, [])


  let { image, name } = product
  let price = product.price.offert ? product.price.offert : product.price  

  return (
    <ModalProductStyled>
      <div className="product-container">
        <Image src={image} alt="" width={200} height={200} />
        <div className="product-details">
          <h2 className="title-name">{name}</h2>
          <h2 className="price">{price}</h2>
          <div className="caption-description">
            <h5 className="caption">Precios con IVA incluido</h5>
            <p className="description">Peso aproximado por pieza, puede variar de acuerdo al peso real.</p>
          </div>
          <div className="select">
            <h4 className="select-title">Selecciona la madurez que deseas</h4>
            <InputSelect />
            <div className="select-actions">
              <SetAdd />
              <Button text="Agregar" />
            </div>
          </div>
        </div>
      </div>

      <div className="sugest-products">
        <SectionProducts title="Productos relacionados" products={products} />
      </div>

    </ModalProductStyled>
    
  )
}

export default ModalProduct
