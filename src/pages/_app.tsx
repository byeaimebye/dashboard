// _app.tsx

import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import theme from '../../themes/theme'

const queryClient = new QueryClient()

if (typeof window !== 'undefined') {
  ReactGA.initialize('G-16BL2BCZPP', {
    debug: true,
  })

  ReactGA.pageview(window.location.pathname + window.location.search)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          {/* Script para Google Analytics */}
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-16BL2BCZPP');
            `}
          </script>
        </Helmet>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
