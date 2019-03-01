import React from 'react';
import styles from './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

var clientsUrl = 'http://localhost:8081/api/customer-support/api/v1/clients/0';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { client: {} }
  }

  componentDidMount(){
    fetch(clientsUrl)
    .then(response => response.json())
    .then(result => {
      this.setState( { client: result } )
    });
}

render() {
    
    return (
      <React.Fragment>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Customer Support: Client Details
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper className="mainDataCard">
          
          <Card className="innerCard" >

          <CardMedia
            style={{height: 0, paddingTop: '56.25%'}}
            image={require('./babymule.jpg')}
            />
              <CardContent>

                <Typography variant="h5" component="h2" color="textPrimary" align="center">
                  {this.state.client.name}
                </Typography>
                <Typography  color="textSecondary" align="left">
                  Email: {this.state.client.email}
                </Typography>
                <Typography  color="textSecondary" align="left">
                  Tier: {this.state.client.tier}
                </Typography>
                <Typography color="textSecondary" align="left">
                  Status: {this.state.client.status}
                </Typography>
              </CardContent>
            
          </Card>
        </Paper>
    </React.Fragment>
    );
  }
}
