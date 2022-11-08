import styled from 'styled-components'
import Icon from './icons'
import { ButtonCloseModal } from './button'

const ModalContentBaseStyled = styled.div`
  background-color: var(--white);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-inline-size: 55rem;
  border-radius: 1rem; 
  margin-block-start: 5rem;

  
`

function ModalContentBase({children, closeModal, cart}) {
  return (
    <ModalContentBaseStyled cart={cart}>
      <ButtonCloseModal icon={<Icon name="close" color="var(--white)" />} closeModal={closeModal} />
      {
        children
      }
    </ModalContentBaseStyled>
    
  )
}

export default ModalContentBase
