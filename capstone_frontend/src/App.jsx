import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DeliveryContainer from './containers/DeliveryContainer';
import PrivacyPolicy from './components/PrivacyPolicy';
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
  spacing: 8,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: 'none',
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
