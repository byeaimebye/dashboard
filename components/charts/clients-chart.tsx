import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts'
import { LinearProgress } from '@mui/material'

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 900,
  height: 600,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
}

const valueFormatter = (value: number) => `${value} Clientes`

const series = [
  {
    dataKey: 'newCustomers',
    label: 'Nuevos Clientes',
    valueFormatter,
    color: '#EB7635',
  },
  {
    dataKey: 'purchasedCustomers',
    label: 'Clientes que Compraron',
    valueFormatter,
    color: '#358DEB',
  },
]

interface ClientsChartProps {
  data: Array<{
    hour: string
    newCustomers: number
    purchasedCustomers: number
  }>
}

const ClientsChart: React.FC<ClientsChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <LinearProgress />
  }

  return (
    <BarChart
      dataset={data}
      xAxis={[{ scaleType: 'band', dataKey: 'hour' }]}
      series={series}
      {...chartSetting}
    />
  )
}

export default ClientsChart
