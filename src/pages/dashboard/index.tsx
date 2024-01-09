import { CalendarToday, Check } from '@mui/icons-material'
import { Box, Chip, Container, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AsideInfo } from '../../../components/aside-info'
import { useDayData, useTodayData } from '../../../services/chartsService'
import ClientsChart from '../../../components/charts/clients-chart'
import DayChart from '../../../components/charts/days-chart'
import DaysTable from '../../../components/tables/days'
import TodayTable from '../../../components/tables/hour'
import NoInfo from '../../../components/no-info'
import ReactGA from 'react-ga'

const dateRanges = [
  'HOY',
  '7D',
  'Este mes',
  '6M',
  'YTD/YTG',
  '1a',
  'Max',
  'Personalizado',
]

const daysOfWeek = [
  'Todo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
]

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState<string | null>('HOY')
  const [selectedDay, setSelectedDay] = useState<string | null>('TODO')
  const [selectedChip, setSelectedChip] = useState<string | null>(null)
  const todayData = useTodayData()
  const dayData = useDayData()

  useEffect(() => {
    if (selectedRange === '7D') {
      setSelectedDay('TODO')
    } else {
      setSelectedDay(null)
    }
  }, [selectedRange])

  const handleChipClick = (clickedRange: string) => {
    ReactGA.event({
      category: 'Date Range Click',
      action: 'Clicked',
      label: clickedRange,
    })
    setSelectedRange(clickedRange)
    setSelectedDay(null)
  }

  const renderChips = (ranges: string[]) => (
    <Stack direction="row" spacing={1} mt={2}>
      {ranges.map((item, index) => (
        <Chip
          key={index}
          label={
            item === 'Personalizado' ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarToday
                  fontSize="small"
                  style={{ marginRight: 4 }}
                  color="primary"
                />
                {item}
              </Box>
            ) : (
              item
            )
          }
          clickable
          onClick={() => handleChipClick(item)}
          sx={{
            background: selectedRange === item ? '#E7DFF8' : 'transparent',
            borderRadius: '8px',
          }}
        />
      ))}
    </Stack>
  )

  const renderDayChips = () => (
    <Stack direction="row" spacing={1} mt={2}>
      {daysOfWeek.map((day, index) => (
        <Chip
          key={index}
          label={day}
          clickable
          sx={{
            background:
              selectedRange === '7D' && selectedDay === 'TODO'
                ? '#E7DFF8'
                : selectedDay === day
                  ? '#E7DFF8'
                  : 'transparent',
            borderRadius: '8px',
          }}
        />
      ))}
    </Stack>
  )

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Container sx={{ maxWidth: '100%', marginRight: '300px' }}>
          {renderChips(dateRanges)}
          {selectedRange === '7D' && renderDayChips()}
          {selectedRange === 'HOY' && <ClientsChart data={todayData.data} />}
          {selectedRange === '7D' && <DayChart data={dayData.data} />}
          {selectedRange === 'HOY' && <TodayTable data={todayData.data} />}
          {selectedRange === '7D' && <DaysTable data={dayData.data} />}
          {selectedRange !== '7D' && selectedRange !== 'HOY' && <NoInfo />}
        </Container>
        <AsideInfo />
      </Box>
    </>
  )
}

export default Dashboard
