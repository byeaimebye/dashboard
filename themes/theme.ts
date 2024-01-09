// themes/themes.js

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#644bba',
      light: 'fafafa',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          display: 'flex',
          padding: '10px 24px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          flex: '1 0 0',
          alignSelf: 'stretch',
          backgroundColor: '#644bba',
          color: '#fff',
          borderRadius: '100px',
          boxShadow:
            '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
          transition:
            'background 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow:
              '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
          },
          '&:disabled': {
            backgroundColor: 'transparent', // Cambia este color al que desees para el estado deshabilitado
            color: '#644bba', // Cambia este color al que desees para el texto deshabilitado
            boxShadow: 'none', // Si no quieres ninguna sombra en el estado deshabilitado
          },
        },
        outlined: {
          background: 'transparent',
          color: '#644bba',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#E7DFF8',
          },
          '&.MuiChip-outlined': {
            '&:hover': {
              backgroundColor: '#E7DFF8',
            },
          },
        },
        label: {
          fontWeight: 'bold',
          // Agrega otros estilos según tus necesidades
        },
      },
    },
  },
})

export default theme
