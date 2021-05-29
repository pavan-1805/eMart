import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import './App.css'

import Head from './components/head'
import Footer from './components/Footer';


const theme = createMuiTheme({
  palette:{
    primary:{
      main : '#4B0082'
    }
  }
})

function App() {
  return (
    <div className="main">
      <div className="main-second">
      <ThemeProvider theme={theme}>
          <Head />
      </ThemeProvider>
      
      </div>
      <Footer/>      
      
    </div>
  );
}

export default App;
