import styled from 'styled-components'
import Icon from './icons'
import { useState, useEffect } from 'react'

const SetAddStyled = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: .5rem 1.5rem;
  box-shadow: 0px 11px 29px 0px #0000000D;
  border-radius: 1rem;


  .minus,.plus{
    display: flex;
    border: 0;
    padding: 0;
    background:  none;
    cursor: pointer;
  }

  .cuantity{
    font: var(--body2-bold);
    inline-size: 2.815rem;
    text-align: center;
  }
`

function SetAdd() {
  let [ cuantity, setCuantity ] = useState(250)

  useEffect(() => {
    if(cuantity === 0){
      setCuantity(250)
    }
  }, [cuantity])

  function handleMinus(){
    setCuantity( cuantity - 50)
  }

  function handlePlus(){
    setCuantity(cuantity + 50)

  }

  return (
    <SetAddStyled>
      <button onClick={handleMinus} className="minus">
        <Icon name="minus" color="var(--black)" />
      </button>
      <span className="cuantity">{cuantity}g</span>
      <button onClick={handlePlus} className="plus">
        <Icon name="plus" color="var(--black)" />
      </button>
    </SetAddStyled>
    
  )
}

export default SetAdd
