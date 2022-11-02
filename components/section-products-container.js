import styled from 'styled-components'
import SectionProducts from '../components/section-products'


const SectionProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

`

function SectionProductsContainer({children}) {
  return (
    <SectionProductsContainerStyled>
      {children}
    </SectionProductsContainerStyled>
    
  )
}

export default SectionProductsContainer
