import styled from 'styled-components'
import Icon from './icons'

const ModalContentBaseStyled = styled.div`
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: 1rem;
  margin-block-start: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-inline-size: 55rem;
  /* position: sticky; */
  /* top: 0; */


  .button{
  padding: .5rem;
  display: flex;
  border: none;
  box-sizing: border-box;
  border-radius: 50%;
  background: var(--cocoabrown);
  cursor: pointer; 
  align-self: end;
}

`

function ModalContentBase({children, closeModal}) {
  return (
    <ModalContentBaseStyled>
      <button className="button" onClick={closeModal}>
        <Icon name="close" color="var(--white)" />
      </button>
      {
        children
      }
    </ModalContentBaseStyled>
    
  )
}

export default ModalContentBase
