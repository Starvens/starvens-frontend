import logo from './logo.svg';
import PrimarySearchAppBar from './components/Landing.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import './App.css';
import Welcome from './components/Welcome';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#33ff6e',
        // contrastText: "#fff" 
      },
      secondary: {
        main: green[500]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* <h1>Welcome to Starvens!!</h1> */}
          <PrimarySearchAppBar></PrimarySearchAppBar>
          <Welcome></Welcome>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
