import styled from 'styled-components'

const LayoutStyled = styled.div`
  margin: auto;
  padding-block-end: 2.5rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  
  @media screen and (min-width: 1281px){
    max-inline-size: 80.375rem;    
  }

`

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
