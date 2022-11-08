import GlobalStyles from "../components/global-styles"
import { CartContextProvider } from "../contexts/cart-context"

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp
