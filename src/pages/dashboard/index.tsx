import React from 'react';
import {Button,TextField,Paper} from '@material-ui/core';
import {VictoryChart,VictoryScatter} from 'victory';
const Dashboard:React.FC =() =>{
    return (
    <>
    <Paper elevation={3}>
    <h1>Ola mundo</h1>
    <form  noValidate autoComplete="off">
  
  <TextField id="outlined-basic" label="Peso em kg" variant="outlined" />
</form>
        <Button color='primary' variant='contained'>Adicionar peso</Button>
        <VictoryChart  height={200} width={200}
  style={{
    background: { fill: "lavender" }
  }}
>
  <VictoryScatter />
</VictoryChart>
        </Paper>
      </>  
        );
}

export default Dashboard;