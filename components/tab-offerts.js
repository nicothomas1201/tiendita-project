import styled from 'styled-components'

const TabOffertsStyled = styled.span`
  display: inline-block;
  font: var(--caption-bold);
  color: var(--purple);
  padding: .25rem;
  background-color: var(--purple-bg);
  border-radius: 1rem;
  align-self: flex-start;


`

function TabOfferts({percentage}) {
  return (
    <TabOffertsStyled>
      {percentage} dto.
    </TabOffertsStyled>
    
  )
}

export default TabOfferts
