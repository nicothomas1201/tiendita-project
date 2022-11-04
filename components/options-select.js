import styled from 'styled-components'
import Icon from './icons'
import { useState, useEffect } from 'react'

const OptionsSelectStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .72rem 1rem;
  color: var(--cocoabrown);
  font: var(--body2-regular);
`

function returnedActive(currentId, idActive){

  if(currentId !== idActive){
    idActive = currentId
    return false
  }

  return true 

}

function OptionsSelect({id, text}) {
  let [ active, setActive] = useState(false)



  function handleClick(e){
    e.stopPropagation()
    setActive(!active)
  }

  
 

  return (
    <OptionsSelectStyled onClick={handleClick}>
      <span className="text">{text}</span>
      <Icon name={ active ? 'button-active' : 'button'} />
    </OptionsSelectStyled>    
  )
}

export default OptionsSelect
