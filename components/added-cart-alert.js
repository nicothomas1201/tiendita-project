import styled from 'styled-components'
import Icon from './icons'

const AddedCartAlertStyled = styled.div`
  /* border: 1px solid red; */
  overflow: hidden;
  position: sticky;
  top: 150px;
  z-index: 1;
  display: flex;
  justify-content: end;

  .container{
    background-color: var(--malachite);
    color: var(--white);
    font: var(--body2-regular);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem .75rem;
    border-radius: .25rem;
    max-inline-size: 22.25rem;
    inline-size: 100%; 
    
    ${({added}) => !added ? {
        transform: 'translateX(100%)', 
        transition: '.5s transform ease-in',
        /* transitionDelay: '.5s', */
    } : {
      transform: 'translateX(0)', 
      transition: '.5s transform ease-in'
    }};
  }
  
`

function AddedCartAlert({added}) {
  return (
    <AddedCartAlertStyled added={added}>
      <div className="container">
        <Icon name="check" color="var(--white)"/>
        <span>Producto Añadido</span>
      </div>
    </AddedCartAlertStyled>
    
  )
}

export default AddedCartAlert
