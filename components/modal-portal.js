import { createPortal } from 'react-dom'
import ModalLocation from './modal-location'
import { useEffect, useState } from 'react'
import Overlay from './overlay'
import ModalContentBase from './modal-content-base'




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



function Modal({isActive, setModal, setAddress}){

  function handleClick(){
    setModal(false)
  }

  if(isActive){
    return (
      <ModalPortal>
        <Overlay>
          <ModalContentBase closeModal={handleClick}>
            <ModalLocation setAddress={setAddress} setModal={setModal}/>
          </ModalContentBase>
        </Overlay>
      </ModalPortal>
    )
  }
  
 

}


export default Modal