import styled from 'styled-components'
import Icon from './icons'
import OptionsSelect from './options-select'
import { useState } from 'react'

const InputSelectStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  color: var(--cocoabrown) ;
  border: 1px solid var(--boulder);
  border-radius: .5rem;
  padding: .75rem 1rem;
  cursor: pointer;
  position: relative;
  

  .text{
    font: var(--body2-regular);
  }

  .options{
    position: absolute;
    background: var(--white);
    left: 0;
    right: 0;
    top: 100%;
    border-radius: .5rem;
    margin-block-start: .5rem;
    block-size: ${({show}) => show ? 'auto' : '0'}; 
    border: ${({show}) => show ? '1px solid var(--boulder)' : 'none'} ;
    overflow: hidden;
  }

  
`

function InputSelect() {
  let [ show, setShow ] = useState(false)

  function handleShow(){
    setShow(!show)
  }

  

  return (
    <InputSelectStyled show={show} onClick={handleShow}>
      <span className="text">Por elegir</span>
      <Icon name="down" color="var(--malachite)" />
      <div className="options">
        <OptionsSelect id="maduro" text="Maduro (Para hoy)" />
        <OptionsSelect id="normal" text="Normal (3-5 días)" />
        <OptionsSelect id="verde"  text="Verde (7 días)" />
      </div>
    </InputSelectStyled>
    
  )
}

export default InputSelect
