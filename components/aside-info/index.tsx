// components/AsideInfo.tsx
import React from 'react'
import {
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  ToggleButton,
  Container,
} from '@mui/material'
import CustomToggleButtons from '../toggle'
import { useAsideData } from '../../services/chartsService'

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

export const AsideInfo = () => {
  const { data, error, isLoading } = useAsideData()
  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    // Verificar si el objeto error es del tipo AsideError
    const asideError = error as AsideError

    // Mostrar el mensaje de error si existe
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
