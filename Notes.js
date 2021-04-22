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
import { positions } from '@material-ui/system';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  table: {
    minWidth: 100,
  },
  positions:{
    padding:'5px',
    marginRight:'8px',
    marginLeft:'8px',
    
  },
  appbarcolor:{
    backgroundColor: "#090a0f"
  },
  tbcolor:{
    backgroundColor: "#8e92a3"
  },
  txtcolor:{
    color: theme.palette.warning.main
  }
}));
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function SimpleCard( ) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
                <Typography className={classes.title} color="textDanger" gutterBottom>
                <AppBar position="static"  className={classes.appbarcolor} >
                    <Toolbar className={`${classes.positions}`} >
                        <Typography variant="h6" className={`${classes.positions} ${classes.txtcolor}`} bgcolor="text.primary"    >
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual </Typography>
                    </Toolbar>
                </AppBar>
                </Typography>
                <Typography className={`${classes.positions}`} variant="h5" component="h2" >
                        <input
                    placeholder="Search…"
                    />
                    <Button variant="contained" color="primary" className={classes.positions}>Serch</Button>
                    <Button variant="contained" color="default" className={`${classes.positions}`}>clear</Button>
                </Typography>
                <Typography className={classes.positions} color="textSecondary">
                
                </Typography>
                <Typography variant="body2" component="p">
               <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tbcolor}>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
}
