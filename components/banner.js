import styled from 'styled-components'
import banner from '../images/banner.png'

const BannerStyled = styled.div`

  padding: 2.5rem 0;

  .banner-img{
    position: relative;
    max-inline-size: 100%;
    inline-size: 100%;
    block-size: 8.25rem;
    border-radius: 1rem;
    overflow: hidden;
    background-image: url(${banner.src});
    background-size: contain;

    .banner-content{
      display: flex;
      position: absolute;
      background: #FC462D3D;
      inset: 0;
      justify-content: center;
      align-items: center;

      .title{
        color: var(--white);
        margin: 0;
        font: var(--body2-bold);
        text-align: center;
      }
    }
  }
  
  @media screen and (min-width: 700px){
    .banner-img{
      block-size: 15.625rem;
      .banner-content{
        .title{
          font: var(--headline1);
        }
      }
    }
  }
  

  
`

function Banner() {
  return (
    <BannerStyled>
      <div className='banner-img'>
        <div className='banner-content'>
          <h1 className='title'>¡Adquiere todos tus productos favoritos al mejor precio!</h1>
        </div>
      </div>
    </BannerStyled>
    
  )
}

export default Banner
