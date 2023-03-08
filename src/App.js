import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './Dashboard';
import CssBaseline from '@mui/material/CssBaseline';

const mdTheme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
