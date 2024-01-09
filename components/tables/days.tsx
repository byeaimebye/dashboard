import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

interface Day {
  day: string
  newCustomers: number
  purchasedCustomers: number
}

interface DaysTableProps {
  data: Day[]
}

const DaysTable: React.FC<DaysTableProps> = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      style={{
        width: '100%',
        marginTop: 'theme.spacing(3)',
        overflowX: 'auto',
      }}
    >
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Día</TableCell>
            <TableCell>Nuevos Clientes</TableCell>
            <TableCell>Clientes que Compraron</TableCell>
            <TableCell>Total de Clientes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((entry, index) => (
            <TableRow key={index} sx={{ '&:hover': { background: '#f0f0f0' } }}>
              <TableCell>{entry.day}</TableCell>
              <TableCell>{entry.newCustomers}</TableCell>
              <TableCell>{entry.purchasedCustomers}</TableCell>
              <TableCell>
                {entry.newCustomers + entry.purchasedCustomers}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DaysTable
