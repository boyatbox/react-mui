import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './Dashboard';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useState } from 'react';
import Context from '@mui/base/TabsUnstyled/TabsContext';


const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const muiLightTheme = createTheme({
  palette: {
    mode: 'light'
  }
});


export const AppThemeContext = createContext(null);



function App() {
  const [appTheme, toggleAppTheme] = useState(true);

  return (
    <AppThemeContext.Provider value={{ appTheme, toggleAppTheme }}>
      <ThemeProvider theme={appTheme ? muiDarkTheme : muiLightTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export default App;
