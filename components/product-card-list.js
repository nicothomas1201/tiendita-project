import styled from 'styled-components'

const ProductCardListStyled = styled.div`
  display: flex;
  gap: 3rem;
  overflow: auto;

`

function ProductCardList({children}) {
  return (
    <ProductCardListStyled>
      {children}
    </ProductCardListStyled>
    
  )
}

export default ProductCardList
