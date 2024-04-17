import './App.css';
import DeliveryContainer from './containers/DeliveryContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#F22222',
    },
    secondary: {
      main: '#FFC7C2',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 16,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '12px 24px',
          borderRadius: 4,
          fontSize: 16,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#F22222',
            color: '#fff',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#fff',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#ff5722',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#ff5722',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ccc',
            },
            '&:hover fieldset': {
              borderColor: '#ff5722',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ff5722',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '8vh',
          boxShadow: 'none',
          padding: 'none'
        },
      },
    },
    

  }
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
