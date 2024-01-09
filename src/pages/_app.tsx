// _app.tsx

import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import theme from '../../themes/theme'

const queryClient = new QueryClient()

// Verifica si estamos en el navegador antes de intentar acceder a window
if (typeof window !== 'undefined') {
  // Inicializa Google Analytics
  ReactGA.initialize('G-16BL2BCZPP', {
    debug: true, // Puedes activar el modo de depuración para obtener más información
  })

  // Envía un evento de página
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
