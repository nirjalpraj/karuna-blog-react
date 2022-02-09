import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'animate.css';
import '../App.css';
import DenseAppBar from './navbar';



const Header = () => {
    return(
        <div  className = "App">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={2}/>
          <Grid item xs={8} marginTop={5} >
              <Typography variant="h1" class="animate__animated animate__bounce">
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

export default Header;