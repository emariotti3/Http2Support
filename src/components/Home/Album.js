import React from 'react';
import styles from './styles.css';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import { Button, } from '@material-ui/core';

var casesUrl = 'http://localhost:8081/api/customer-support/api/v1/clients/0/cases/';

export default class Album extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cases : []
    };  
  }

  componentDidMount() {
    const maxCases = 10;
    for (let i = 0; i < maxCases; i++) {
      fetch(casesUrl + i)	
      .then(response => response.json())	
      .then(result => {	
        this.setState({ 
          cases: this.state.cases.concat([result])
        })
      });
    }
  }

  render() {
    const { classes } = this.props;
    const priorities = { "HIGH": "secondary" , "MEDIUM": "primary" }

    const theme = createMuiTheme({
      palette: {
        primary: yellow, 
        secondary: red
      },
      typography: {
        useNextVariants: true
      }
    });

    return (
      <div>
        <Paper className="gridContainer" elevation={1}>
          <Grid container spacing={24}>
            {this.state.cases.map(card => (
              <Grid item key={card} xs={3}>
                <Paper className="card" >
                    <div className="priorityLabel">
                      <MuiThemeProvider theme={theme}>
                        <Button 
                          variant="contained" 
                          center="left" 
                          color = { priorities[card.priority.toUpperCase()] } 
                          disableRipple
                        >
                          {card.priority.toUpperCase()} 
                        </Button>
                      </MuiThemeProvider>
                    </div>

                    <Typography variant="h5" colorTextSecondary className="cardHeader" gutterBottom="false">
                      {card.title}
                    </Typography>
                    
                    <Divider variant="middle" />
                    
                    <Typography color="textSecondary">
                      {card.description}
                    </Typography>
                  
                    <Typography align="center" className="cardStatus" color="textSecondary" gutterBottom>
                      Status: {card.caseStatus} 
                    </Typography>

                    <Typography color="textSecondary">
                      Tracking #: <a href="www.example.com">{card.trackId}</a>
                    </Typography>
                  </Paper>
              </Grid>
            ))}
          </Grid>
          </Paper>
    </div>

    );
  }
}

