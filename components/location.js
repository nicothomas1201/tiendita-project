import styled from 'styled-components'
import Icon from './icons'

const LocationStyled = styled.div`

  display: flex;
  align-items: center;
  gap: .5rem;

  .location{
    font: var(--body1-bold);
    color: var(--cocoabrown);
  }

`

function Location({location}) {
  return (
    <LocationStyled>
      <Icon name="location" color="var(--orange)" />
      <span className='location'>{location}</span>
    </LocationStyled>
    
  )
}

export default Location
