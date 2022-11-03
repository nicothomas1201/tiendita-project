import styled from 'styled-components'
import Icon from './icons'
import InputLocation from './input-location'
import { Button } from './button'
import { useState, useEffect } from 'react'

const ModalLocationStyled = styled.div`


  

  .details{
    color: var(--cocoabrown);
    margin-block-end: 1.5rem;
    .title{
      font: var(--headline1);
      margin: 0;
      margin-block-end: 1rem;
    }

    .description{
      margin: 0;
      font: var(--body1-regular);
    }
  }

  .actions{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }



`

function ModalLocation({setModal, setAddress}) {
  let [ disabled, setDisabled ] = useState(true)
  let [value, setValue] = useState('')

  useEffect(() => {
    if(value !== '') return setDisabled(false)

    return setDisabled(true)
  }, [value])
  


  function handleClick(){
    setModal(false)
    if(value !== ''){
      return setAddress(value)
    }
    
  }

  function handleSubmit(e){
    e.preventDefault()
    setValue('')
  }


  return (
    <ModalLocationStyled>
      <form onSubmit={handleSubmit}>
        <div className="details">
          <h2 className="title">¿Dónde quieres recibir tu pedido?</h2>
          <p className="description">Para poder ofrecerte productos dentro de tu área, necesitamos tu dirección</p>
        </div>
        <div className="actions">
          <InputLocation setValue={setValue} value={value} />
          <Button disabled={disabled} onClick={handleClick}  text="Buscar" />
        </div>
      </form>
    </ModalLocationStyled>
    
  )
}

export default ModalLocation
