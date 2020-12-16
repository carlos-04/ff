import { ThemeProvider } from '@material-ui/core/styles'
import './App.css';
import MapView from './components/MapView'

import Container from './components/Container'
function App() {
  return (
    <ThemeProvider>
    
        {/*  */}

        <MapView/>


    </ThemeProvider>
  );
}

export default App;
