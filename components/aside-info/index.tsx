import React, { useState, useEffect } from 'react'
import {
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  ToggleButton,
  Container,
  IconButton,
} from '@mui/material'
import CustomToggleButtons from '../toggle'
import { useAsideData } from '../../services/chartsService'
import CloseIcon from '@mui/icons-material/Close'

interface AsideError {
  message: string
}

interface DayTotal {
  date: string
  facturado: number
  acumulado: number
}

interface MonthData {
  month: string
  totals: DayTotal[]
  totalGeneral?: number
  clients: number
  sales: number
  totalSales: number
  totalAmount: number
  cashback: number
  cumulative: number
  invoiced: number | DayTotal
}

export type MonthlyData = MonthData[]

const AsideInfo = () => {
  const { data, error, isLoading } = useAsideData()
  const isBrowser = typeof window !== 'undefined'
  const [isAsideOpen, setIsAsideOpen] = useState(
    isBrowser ? window.innerWidth >= 1300 : false
  )

  useEffect(() => {
    const handleResize = () => {
      setIsAsideOpen(isBrowser ? window.innerWidth >= 1300 : false)
    }

    if (isBrowser) {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isBrowser])

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen)
  }

  if (!isAsideOpen) {
    return (
      <IconButton
        onClick={toggleAside}
        sx={{ position: 'fixed', top: 0, right: 0, zIndex: 9999 }}
      >
        <Typography>'Open Aside'</Typography>
      </IconButton>
    )
  }

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    const asideError = error as AsideError
    return <p>Error al cargar los datos del aside: {asideError.message}</p>
  }

  return (
    <Paper
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '300px',
        height: '100%',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '70px',
      }}
    >
      <IconButton
        onClick={toggleAside}
        sx={{ position: 'absolute', top: 5, right: 5 }}
      >
        <CloseIcon />
      </IconButton>
      <CustomToggleButtons />
      <Box
        sx={{
          maxHeight: '79%',
          overflowY: 'auto',
          paddingRight: '5px',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#E0E0E0',
            borderRadius: '4px',
          },
        }}
      >
        {data.map((monthData: MonthData) => (
          <Card key={monthData.month} sx={{ marginBottom: 2, height: '280px' }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {monthData.month}
              </Typography>
              <Container
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography>Clientes</Typography>
                <Typography> {monthData.clients}</Typography>
              </Container>
              <Container
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography>Ventas totales</Typography>
                <Typography> {monthData.totalSales}</Typography>
              </Container>
              <Container
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography>Monto total</Typography>
                <Typography> {monthData.totalGeneral}</Typography>
              </Container>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  marginTop: '10px',
                  marginBottom: '10px',
                  paddingLeft: '14px',
                }}
              >
                Cashback
              </Typography>
              <Container
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography>Acumulado</Typography>
                <Typography>${monthData.cumulative}</Typography>
              </Container>
              <Typography>
                {monthData.totals.map((dayTotal) => (
                  <Container
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                    key={dayTotal.date}
                  >
                    <Typography>Facturado {dayTotal.date}</Typography>
                    <Typography>${dayTotal.acumulado}</Typography>
                  </Container>
                ))}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Paper>
  )
}

export default AsideInfo
