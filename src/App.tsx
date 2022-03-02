import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#191919',
        paper: '#242424',
      }
    },
  })
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#FFFFFF',
      }
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <p>Hello World</p>
      </div>
    </ThemeProvider>
  )
}

export default App
