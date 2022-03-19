import { SessionProvider } from 'next-auth/react'
import { globalCss } from 'stitches.config'

const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: 'system-ui',
  },
  a: {
    color: '$secondary',
  },
})

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      {globalStyles()}
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
