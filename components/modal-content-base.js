import styled from 'styled-components'
import Icon from './icons'
import { ButtonCloseModal } from './button'

const ModalContentBaseStyled = styled.div`
  display: flex;
  background-color: var(--white);
  padding: 2.5rem;
  flex-direction: column;
  gap: 1.5rem;
  max-inline-size: 55rem;
  inline-size: 100%;
  border-radius: 1rem; 
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
  /* inline-size: 100%; */
  overflow: auto;
`

function ModalContentBase({children, closeModal, cart}) {
  return (
    <ModalContentBaseStyled cart={cart}>
      <ButtonCloseModal icon={<Icon name="close" color="var(--white)" />} closeModal={closeModal} />
      {children}
    </ModalContentBaseStyled>
    
  )
}

export default ModalContentBase
