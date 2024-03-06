import { ruRU } from '@mui/material/locale'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      background: { default: '#000000' },
      primary: {
        main: '#8de3fe',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  },
  ruRU
)
