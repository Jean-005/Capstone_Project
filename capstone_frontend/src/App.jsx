import './App.css';
import DeliveryContainer from './containers/DeliveryContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#F22222', // red
    },
    secondary: {
      main: '#FF5733', // lighter red
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 36px',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DeliveryContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
