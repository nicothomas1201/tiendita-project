import styled from 'styled-components'

const ProductCardListStyled = styled.div`
  display: flex;
  gap: 3rem;
  overflow: hidden;

`

function ProductCardList({children}) {
  return (
    <ProductCardListStyled>
      {children}
    </ProductCardListStyled>
    
  )
}

export default ProductCardList
