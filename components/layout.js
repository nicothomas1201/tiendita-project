import styled from 'styled-components'

const LayoutStyled = styled.div`
  max-inline-size: 80.375rem;
  margin: auto;

`

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
    
  )
}

export default Layout
