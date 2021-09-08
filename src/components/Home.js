import React from 'react'
import '../stylesheets/home.css';
// import { Typography } from '@material-ui/core';
// import { ThemeProvider } from '@material-ui/styles';
// import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Matter from "./Matter";
import Picture from './Picture';
import Sample from './Sample';
import Dark from './Dark';
import viewVlogs from './viewVlogs';


// let theme = createTheme();
// theme = responsiveFontSizes(theme);



export default function home() {
    return (
        <div >
            <Matter></Matter>
            <Picture></Picture>
            <Sample></Sample>
           <Dark></Dark>
         
           {/* <ThemeProvider theme={theme}>
  <Typography variant="h1">Responsive </Typography>
</ThemeProvider> */}
        </div>
    )
}
