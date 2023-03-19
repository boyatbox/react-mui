import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './Dashboard';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useState } from 'react';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import SignIn from './SignIn';

const muiCommon = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});


const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark'
  }, muiCommon
});

function ListItemComp() {
  return <><div style={{ backgroundColor: 'red' }}></div></>
}

const muiLightTheme = createTheme({
  palette: {
    mode: 'light'
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        size: 'small'
      },
    },
    MuiList: {
      defaultProps: {
        dense: true,
        disablePadding: true
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
        disablePadding: true,
        disableGutters: true,

      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
      styleOverrides: {
        root: ({ ownerState }) =>
        (
          { backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid lightgray' }
        )
        ,
      },
    }

  },
});


export const AppThemeContext = createContext(null);



function App() {
  const [appTheme, toggleAppTheme] = useState(true);

  return (
    <AppThemeContext.Provider value={{ appTheme, toggleAppTheme }}>
      <ThemeProvider theme={appTheme ? muiLightTheme : muiLightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>


      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export default App;
