import Cart from './cart'
import Close from './close'
import Down from './down'
import Left from './left'
import Location from './location'
import Minus from './minus'
import Plus from './plus'
import RadioButtonActive from './radio-button-active'
import RadioButton from './radio-button'

function Index({name, ...props}) {
  switch(name){
    case 'cart': return <Cart {...props} />

    case 'close': return <Close {...props} />

    case 'down': return <Down {...props} />
    
    case 'left': return <Left {...props} />
    
    case 'location': return <Location {...props} />
    
    case 'minus': return <Minus {...props} />
    
    case 'plus': return <Plus {...props} />
    
    case 'button-active': return <RadioButtonActive {...props} />
    
    case 'button': return <RadioButton {...props} />
    
    default: return null

  }
}
''
Index.defaultProps = {
  color: 'var(--black)',
  size: 24,
}

export default Index
