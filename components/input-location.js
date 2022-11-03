import styled from 'styled-components'
import Icon from './icons'

const InputLocationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .75rem 1rem;
  border: 1px solid var(--boulder);
  border-radius: .5rem;

  & input{
    border: none;
    flex: 1;
    outline: none;
    font: var(--body2-regular);
    color: var(--black)
  }

`

function InputLocation({setValue, value}) {
  function handleOnChange(e){
    setValue(e.target.value)
  }

  return (
    <InputLocationStyled>
      <Icon name="location" colo="#000000" />
      <input value={value} onChange={handleOnChange} type="text" placeholder="Ingresa tu dirección"/>
    </InputLocationStyled>
    
  )
}

export default InputLocation
