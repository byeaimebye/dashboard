import React from 'react'
import { ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material'
import { BarChart, Star } from '@mui/icons-material'
import theme from '../../themes/theme'

interface CustomToggleButtonsProps {
  value?: string
  onChange?: (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => void
}

const CustomToggleButtons: React.FC<CustomToggleButtonsProps> = ({
  value,
  onChange,
}) => {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={onChange}
      sx={{
        marginBottom: 2,
        padding: '5px',
        borderRadius: '55px',
        border: '1px solid #644BBA',
      }}
    >
      <ToggleButton
        value="dashboard"
        sx={{
          justifyContent: 'start',
          borderRadius: '55px',
          border: 'transparent ',
          backgroundColor: value === 'dashboard' ? '#644bba' : 'transparent',
          '&.Mui-selected': {
            backgroundColor: '#644bba',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BarChart fontSize="small" sx={{ marginRight: 1 }} />
          <Typography sx={{ color: value === 'dashboard' ? '#fff' : '#000' }}>
            Dashboard
          </Typography>
        </Box>
      </ToggleButton>
      <ToggleButton
        value="pulse"
        sx={{
          justifyContent: 'start',
          width: '100%',
          borderRadius: '55px',
          border: 'transparent !important',
          backgroundColor:
            value === 'pulse' ? '#644bba !important' : 'transparent !important',
          '&.Mui-selected': {
            backgroundColor: '#644bba !important',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Star
            fontSize="small"
            sx={{ marginRight: 1, fill: theme.palette.primary.light }}
          />
          <Typography sx={{ color: value === 'pulse' ? '#fff' : '#000' }}>
            Pulso
          </Typography>
        </Box>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default CustomToggleButtons
