import styled from 'styled-components'
import { ButtonCloseModal } from '../components/button'
import Icon from '../components/icons'
import Layout from '../components/layout'
import ShoppingCartItem from '../components/shopping-cart-item'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from '../components/button'
import { useRouter } from 'next/router'
import Modal from '../components/modal-portal'

const PayStyled = styled.div`
  background: var(--bg);

  .header{
    padding-block-start: 1rem;
    padding-block-end: 1.5rem;

    .button{
      border: none;
      background: none;
      display: flex;
      gap: .5rem;
      color: var(--cocoabrown);
      align-items: center;
      cursor: pointer;

      .text{
        font: var(--button);
      }
    }
  }

  .main{
    display: flex;
    /* justify-content: space-between; */
    gap: 1.5rem;
    flex-direction: column;
    /* align-items: center;  */

    .products-container{
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: #ffffff;
      border-radius: 1rem;
      box-shadow: 0px 11px 29px 0px #0000000D;
      /* inline-size: 100%; */
      flex: 1;
    }
    
    .form{
      inline-size: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      

      .section{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        color: var(--cocoabrown);

        .text{
          color: var(--black);
          font: var(--body2-regular);
        }

        .input{
          padding: .5rem .75rem;
          font: var(--body1-regular);
          border: 1px solid #3C42571F;
          border-radius: .5rem;
          outline: none;
          box-shadow: 0px 1px 1px 0px #0000000A;
          box-shadow: 0px 2px 5px 0px #00000014;
        }
      }
    }
  }

  @media screen and (min-width: 980px){
    .main{
      flex-direction: row;
      justify-content: space-between;

      .products-container{
        max-inline-size: 39.4375rem;
        flex: 0;
        inline-size: 100%;
      }
      
      .form{
        max-inline-size: 25.8125rem;
        flex: 0;
        inline-size: 100%;

      }
    }
  }

`

function Pay() {
  let [ cart, setCart ] = useState([])
  let [total, setTotal] = useState(0)
  let [ modal, setModal ] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if(typeof window !== 'undefined'){
      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')))      
      }
    }    
  }, [])

  useEffect(() => {
    let prices = cart.map( item => item.price.offert ? item.price.offert : item.price)
    let total = prices.reduce( ( prev, current ) => prev + current, 0)
    setTotal(total)
  }, [cart])
  
  function handleClick(){
    router.push('/')
  }

  function handleSubmit(e){
    e.preventDefault()
    setModal({ type: 'pay', show: true})
  }

  return (
    <Layout>
      <PayStyled>
        <Modal 
          modal={modal}
          setModal={setModal} />

        <div className="header">
          <div className="button" onClick={handleClick}>
            <ButtonCloseModal icon={
              <Icon name="left" color="var(--white)"/>
            } />
            <span className="text">Volver</span>
          </div>
        </div>

        <main className="main">
          <div className="products-container">
            {
              cart.map( ( item, index ) => <ShoppingCartItem product={item} key={index} />)
            }            
          </div>

          <form className="form" onSubmit={handleSubmit}>

            <div className="section">
              <label className="text" htmlFor="email">Correo electronico</label>
              <input required className="input" id="email" type="email" placeholder="example@gmail.com" />
            </div>

            <div className="section">
              <label className="text" htmlFor="name">Nombre de la tarjeta</label>
              <input required className="input" id="name" type="text" placeholder="nombre" />
            </div>
            <Button text={`Pagar $${total}`} />
          </form>


        </main>
      </PayStyled>
    </Layout>
    
  )
}

export default Pay
