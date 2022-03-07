import logo from './logo.svg';
import PrimarySearchAppBar from './components/Landing.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import './App.css';
import Welcome from './components/Welcome';
import RightShares from './components/RightShares';
import HomePPT from './components/HomePPT';
import { Box } from '@mui/material';
import AdhocInfo from './components/AdhocInfo';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        // main: '#33ff6e',
        main: '#56C6A9'
        // contrastText: "#fff" 
      },
      secondary: {
        main: green[500]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#282c34',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
        <div className="App">
          <PrimarySearchAppBar></PrimarySearchAppBar>
          <Box sx={{ display: 'grid', gridTemplateColumns: '4fr 1fr' }}>
            <HomePPT></HomePPT>
            <Welcome></Welcome>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <RightShares></RightShares>
              <AdhocInfo></AdhocInfo>
            </Box>
          </Box>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
