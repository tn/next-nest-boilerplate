import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'theme-ui'
import theme from '../themes/theme'

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
