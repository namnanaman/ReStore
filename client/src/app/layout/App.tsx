import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";



function App() {
  const[darkMode,setDarkMode] = useState(false);

  const palleteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette:{
      mode:palleteType,
      background:{
        default: palleteType === "light" ? "#eaeaea" :"#121212"
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  
  
  return (
    <ThemeProvider theme = {theme}>

      <CssBaseline/>
      <Header darkMode= {darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog/>

      </Container>
      
    </ThemeProvider>
  );
}

export default App;
