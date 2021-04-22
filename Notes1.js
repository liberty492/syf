import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '1000px',
    Height:'25px',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop:theme.spacing(2),
    border: "1px solid black",
    width: '75ch',
  },
  box: {
    height: 100,
    display: "flex",
    border: "0px solid black", 
    padding: 50
  },
  topLeftBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  appbarcolor:{
    backgroundColor: "#090a0f"
  },
  positions:{
    color: theme.palette.warning.main
    
  }
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
                <Typography className="" color="textDanger" gutterBottom>
                <AppBar position="static" className={classes.appbarcolor} >
                    <Toolbar >
                        <Typography variant="h6" className={classes.positions} bgcolor="text.primary"   >
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual </Typography>
                    </Toolbar>
                </AppBar>
                </Typography>
                <Typography className="" variant="h5" component="h2">
                        <TextField className={classes.textField}
                            id="standard-multiline-static"
                            label=""
                            multiline
                            rows={10}
                            coloums={50}
                            
                            defaultValue="Default Value"
                       />     
                </Typography>
      </CardContent>
      <CardActions component="span"
  m={1} //margin
  className={`${classes.topLeftBox} ${classes.box}`}>
      <Button variant="contained" color="primary">Submit</Button>
        <Button variant="contained" color="default">clear</Button>
      </CardActions>
    </Card>
  );
}
