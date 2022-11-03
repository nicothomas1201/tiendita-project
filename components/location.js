import styled from 'styled-components'
import Icon from './icons'

const LocationStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;

  .location{
    font: var(--body1-bold);
    color: var(--cocoabrown);
    max-inline-size: 18.8125rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

`

function Location({location, onClick}) {
  return (
    <LocationStyled onClick={onClick} >
      <Icon name="location" color="var(--orange)" />
      <span className='location'>{location}</span>
    </LocationStyled>
    
  )
}

export default Location
