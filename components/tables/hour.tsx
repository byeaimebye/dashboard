import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import LinearProgress from '@mui/material/LinearProgress'

const hours = Array.from(
  { length: 24 },
  (_, index) => `${index}:00 - ${index + 1}:00`
)

const TodayTable: React.FC<{
  data: Array<{
    hour: string
    newCustomers: number
    purchasedCustomers: number
  }>
}> = ({ data }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular un retraso para la carga de datos
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  const groupedHours: Record<
    string,
    { newCustomers: number; purchasedCustomers: number }
  > = {}

  data?.forEach((entry) => {
    const group = `${Math.floor(parseInt(entry.hour) / 4) * 4}:00 - ${
      Math.floor(parseInt(entry.hour) / 4) * 4 + 4
    }:00`

    if (!groupedHours[group]) {
      groupedHours[group] = { newCustomers: 0, purchasedCustomers: 0 }
    }

    groupedHours[group].newCustomers += entry.newCustomers
    groupedHours[group].purchasedCustomers += entry.purchasedCustomers
  })

  return (
    <TableContainer
      component={Paper}
      style={{
        width: '100%',
        marginTop: 'theme.spacing(3)',
        overflowX: 'auto',
      }}
    >
      {loading && <LinearProgress />}
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horas</TableCell>
            <TableCell>Clientes (0-2)</TableCell>
            <TableCell>Clientes (2-4)</TableCell>
            <TableCell>Clientes (4-8)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(groupedHours).map(([group, values], index) => (
            <TableRow key={index} sx={{ '&:hover': { background: '#f0f0f0' } }}>
              <TableCell>{group}</TableCell>
              <TableCell>{values.newCustomers}</TableCell>
              <TableCell>{values.purchasedCustomers}</TableCell>
              <TableCell>
                {values.newCustomers + values.purchasedCustomers}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TodayTable
