
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} marginTop={10} >
      <AppBar position="static" color="transparent" variation="outlined" elevation="0" >
        <Toolbar variant="dense" >
            <Grid container direction="row" spacing={4}>   

                <Grid item>
                    <Link to={'/blog'}>
                        <Typography component="div" variant="h5">
                            Blogs
                        </Typography>
                    </Link>    
                </Grid>

    
                <Grid item xs={7}/>
                <Grid item>
                <Typography variant="h5">
                        Twitter
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h5">
                        Instagram
                    </Typography>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
