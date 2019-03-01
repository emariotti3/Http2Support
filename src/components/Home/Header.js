import React from 'react';
import styles from './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { client: {} }
  }

  componentDidMount(){
    fetch('https://localhost:5000/customer-support/api/v1/clients/4563')
    .then(response => response.json())
    .then(result => {
      this.setState({ client: result })
    });
}

render() {
    
    return (
      <React.Fragment>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Customer support
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper className="card">

          
          <Card className="innerCard">
              <div>
              <CardContent>
                <Typography variant="title" component="h4" align="left" color="textPrimary" gutterBottom> 
                  Client Information
                </Typography>

                <Divider variant="fullWidth" />

                <Typography color="textSecondary" align="left">
                  {this.state.client.name}
                </Typography>
                <Typography  color="textSecondary" align="left">
                  email: {this.state.client.email}
                </Typography>
                <Typography  color="textSecondary" align="left">
                  Tier: {this.state.client.tier}
                </Typography>
                <Typography color="textSecondary" align="left">
                  Status: {this.state.client.status}
                </Typography>
              </CardContent>
            </div>
            <CardMedia
            style={{height: 0, paddingTop: '56.25%'}}
            image={require('./babymule.jpg')}
            />
          </Card>
        </Paper>
    </React.Fragment>
    );
  }
}
