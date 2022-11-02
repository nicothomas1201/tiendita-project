import styled from 'styled-components'

const LayoutStyled = styled.div`
  max-inline-size: 80.375rem;
  margin: auto;
  padding-block-end: 2.5rem;

`

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
