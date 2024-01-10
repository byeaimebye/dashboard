import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
} from '@mui/material'
import Dashboard from './dashboard'
import React, { useState } from 'react'

interface ButtonData {
  label: string
  content: React.ReactNode
}

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<number>(0)
  const buttonData: ButtonData[] = [
    { label: 'Dashboard', content: <Dashboard /> },
    { label: 'Clientes', content: <Dashboard /> },
    { label: 'Reglas de acumulacion', content: <Dashboard /> },
  ]

  const handleButtonClick = (index: number) => {
    setSelectedButton(index)
  }

  const theme = useTheme()

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
              width: '100%',
              [theme.breakpoints.up('sm')]: {
                flexDirection: 'row',
                width: '30%',
                margin: '0 auto',
              },
            }}
          >
            {buttonData.map((button, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(index)}
                variant="contained"
                disabled={button.label !== 'Dashboard'}
                sx={{
                  flex: '0 0 auto',
                  whiteSpace: 'noWrap',
                  backgroundColor:
                    selectedButton === index
                      ? theme.palette.primary.main
                      : '#FFF',
                  color:
                    selectedButton === index
                      ? '#FFF'
                      : theme.palette.primary.main,
                  margin: '4px',
                  [theme.breakpoints.up('sm')]: {
                    width: 'min-content',
                  },
                }}
              >
                {button.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Container>{buttonData[selectedButton].content}</Container>
    </>
  )
}
