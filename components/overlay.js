import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(51, 41, 39, 0.6);;
  display: flex;
  justify-content: center;
  block-size: 100%;

  ${({cart}) => {
    if(cart){
      return `
        justify-content: end;
        align-items: none;  
      `
    }

  
    return 'align-items: center;'
  }}

`

export default Overlay