import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import '../styles/drawerStyles.css'
import "@reach/menu-button/styles.css";






import {UserContextProvider} from "../lib/UserContext";


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>

   )
}

export default MyApp
