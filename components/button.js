import styled from 'styled-components'

const ButtonStyled = styled.button`
  background: var(--malachite);
  padding: .75rem 1.5rem;
  border-radius: .5rem;
  color: var(--white);
  border: none;
  font: var(--button);
  cursor: pointer;
  /* flex: 1; */

  ${({disabled}) => disabled ? 'opacity: 0.5;': 'opacity: 1;'}
`

const ButtonIconStyled = styled(ButtonStyled)`
  display: flex;
  align-items: center;
  gap: .5rem;
`

const ButtonShoppingStyled = styled(ButtonStyled)`
  display: flex;
  align-items: center;
  gap: 1rem;

  .cuantity{
    display: inline-block;
    background: #2E7E78;
    padding: 0 .5rem;
    border-radius: .25rem;
    font: var(--body2-bold)
  }

  .text{
    font: var(--body2-bold)
  }

  .price{
    font: var(--body2-regular);
  }
`

export function Button({text, icon,  disabled, onClick}) {
  if(icon){
    return (
      <ButtonIconStyled>
        {icon}
        <span>{text}</span>
      </ButtonIconStyled>
    )
  } else{
    return (
      <ButtonStyled disabled={disabled} onClick={onClick}  >
        {text}
      </ButtonStyled>
    )
  }


}

export function ButtonShopping({ price, cuantity, text }){
  return (
    <ButtonShoppingStyled>
      <span className='cuantity'>{cuantity}</span>
      <span className='text'>{text}</span>
      <span className='price'>{price}</span>
    </ButtonShoppingStyled>
  )
}




