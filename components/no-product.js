import styled from 'styled-components'
import Image from 'next/image'
import { Button } from './button'

const NoProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .title{
    font: var(--headline3);
    margin: 0;
  }

`

function NoProduct({ closeModal }) {
  return (
    <NoProductStyled>
      <Image src="/no-product.png" alt="" width={250} height={193} />
      <h3 className="title">Tu canasta está vacía</h3>
      <Button onClick={closeModal} text="Agregar Productos" />
    </NoProductStyled>
    
  )
}

export default NoProduct
