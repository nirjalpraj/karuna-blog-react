import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import DenseAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={2}/>
          <Grid item xs={8} marginTop={5}>
              <Typography variant="h4" >
                DreamerK's Blog
              </Typography>
              <DenseAppBar/>
              <div className="line-1"/>
          </Grid>
        <Grid item xs={2}/>
      </Grid>
    </Box>
      
    </div>
  );
}

export default App;
