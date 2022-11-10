import styled from 'styled-components'
import ProductCard from './product-card'
import ProductCardList from './product-card-list'

const SectionProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem;
  padding-inline-end: 0;
  box-shadow: 0px 11px 29px 0px #0000000D;
  background-color: var(--white);
  border-radius: 1rem;

  .title{
    font: var(--headline3);
    color: var(--black);
    margin: 0;
  }

`

function Section({ products, title, setModal, setOneProduct }) {



  return (
    <SectionProductsStyled>
      <h3 className="title">{title}</h3>
      <ProductCardList>
        {
          products ? products.map((product, index) => <ProductCard setOneProduct={setOneProduct} setModal={setModal} product={product} key={index} />) : <span>Working on</span>
        }
      </ProductCardList>
    </SectionProductsStyled>
    
  )
}

export default Section
