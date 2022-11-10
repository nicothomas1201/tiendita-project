import styled from 'styled-components'
import Icon from './icons'

const LocationStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  .location{
    font: var(--body1-bold);
    color: var(--cocoabrown);
    max-inline-size: 10.375rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  @media screen and (min-width: 610px){
    position: static;
    transform: none;

    .location{
      max-inline-size: 18.8125rem;
    }
  }

`

function Location({location, onClick, active}) {
  return (
    <LocationStyled onClick={onClick} >
      { active ? <Icon name="location" color="var(--orange)" /> : null }
      <span className='location'>{location}</span>
      { active ? null : <Icon name="down" color="var(--orange)" />}
    </LocationStyled>
    
  )
}

export default Location
