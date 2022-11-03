import GlobalStyles from "../components/global-styles"
import Modal from "../components/modal-portal"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
