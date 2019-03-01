import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
});

export default class Header extends React.Component {
    constructor(props) {
      super(props);
    }
    
render() {
    return (
        <React.Fragment>
        <CssBaseline />
            <footer>
            <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
            Copyright © 2019 Muleys, All rights reserved. 
            </Typography>
            </footer>
        </React.Fragment>
        );
    }
}
