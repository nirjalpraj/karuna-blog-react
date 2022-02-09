import Grid from '@mui/material/Grid';
import 'animate.css';
import image from '../img/k.jpg';
const HomePage = () => {
    return(
        <Grid container >
            <Grid item xs={2} />
            
            <Grid item xs={4} >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio ipsum, gravida ac sagittis vel, tristique at tortor. Nam gravida laoreet risus vel efficitur. Aenean id est dui. Proin enim mauris, ullamcorper vel ex id, viverra suscipit dui. Proin vel nisi auctor, pellentesque urna ac,
            </p>
            <p>
                interdum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nec        odio mattis vestibulum. Maecenas bibendum lectus arcu, at scelerisque nunc dictum vel. Maecenas accumsan 
            </p>
            <p>
                luctus consectetur. Suspendisse ut suscipit libero, id fermentum ex. Vestibulum urna orci, tristique eget congue ut, rutrum nec sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam a consectetur neque.
            </p>
            </Grid>

            <Grid item xs={4} marginTop={3}marginLeft={15} >
            <img src={image}height={450} width={320} alt="karuna" />
            
            </Grid>

            <Grid item xs={2}/>

        </Grid>
    );
}

export default HomePage;