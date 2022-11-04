import { createPortal } from 'react-dom'
import ModalLocation from './modal-location'
import { useEffect, useState } from 'react'
import Overlay from './overlay'
import ModalContentBase from './modal-content-base'
import ModalProduct from './modal-product'




function ModalPortal({ children }){
  let [portal, setPortal] = useState(null)
  

  useEffect(() => {
    if(typeof window !== 'undefined'){
      setPortal(document.getElementById('portal'))
    }
  }, [])

  
  

  if(portal){
    return createPortal(children, portal)
  } 
  return null
}



function Modal({modal, setModal, setAddress, product, type}){

  function handleClick(){
    setModal(false)
  }

  function selectModal(type){
    switch (type){
      case 'product': {
        return <ModalProduct  product={product}/>
      }
      case 'location':{
        return <ModalLocation setAddress={setAddress} setModal={setModal}/>
      }

      default: console.log('working on')

    }

  }

  if(modal.show){
    return (
      <ModalPortal>
        <Overlay>
          <ModalContentBase closeModal={handleClick}>
            {selectModal(modal.type)}
          </ModalContentBase>
        </Overlay>
      </ModalPortal>
    )
  }
  
 

}


export default Modal