import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts'
import { LinearProgress } from '@mui/material'

const chartSetting = {
  yAxis: [
    {
      label: 'Clientes',
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

interface DayChartProps {
  data: Array<{
    day: string
    newCustomers: number
    purchasedCustomers: number
  }>
}

const DayChart: React.FC<DayChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <LinearProgress />
  }

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

  return (
    <BarChart
      data-testid="day-chart"
      dataset={data}
      xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
      series={series}
      {...chartSetting}
    />
  )
}

export default DayChart
