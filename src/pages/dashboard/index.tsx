import React from 'react';
import {Button,TextField,Paper} from '@material-ui/core';
import {VictoryChart,VictoryScatter} from 'victory';
import {Container,Tables} from './style';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



function createData(name:number, calories:number, fat:number, carbs:number, protein:number) {
  return { name, calories, fat, carbs, protein };
}

const Dashboard:React.FC =() =>{

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
 
  
  const rows = [
    createData(1, 74.6, 6.0, 24, 4.0),
    createData(2, 75.3, 9.0, 37, 4.3),
    createData(3, 77.5, 16.0, 24, 6.0),
    createData(4, 73.2, 3.7, 67, 4.3),
    createData(5, 71.4, 16.0, 49, 3.9),
  ];
  const classes = useStyles();
    return (
    <>
    <Container>
    <Paper elevation={3}>
    <h1>Acompanhe sua evolução </h1>
    <form  noValidate autoComplete="off">
  
  <TextField id="outlined-basic" label="Peso em kg" variant="outlined" />
</form>
        <Button color='primary' variant='contained'>Adicionar peso</Button>
        <Tables>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dia do mês</TableCell>
            <TableCell align="right">Peso em KG</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


</Tables>
        <VictoryChart  height={200} width={200}
  style={{
    background: { fill: "lavender" }
  }}
>

  
  <VictoryScatter />
</VictoryChart>
        </Paper>
        </Container>
      </>  
        );
}

export default Dashboard;