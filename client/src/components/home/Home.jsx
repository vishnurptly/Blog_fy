import { Grid } from '@mui/material';

import Banner from '../banner/Banner';
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {

    return (
        <>
            <Banner />
            <Grid container sx={{ padding: '15px', background: "#ceced4" }}>
                <Grid item lg={2} xs={12} sm={2} style={{ background: '#1c1c3d', }}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10} style={{ background: '#1a4964', paddingLeft: '5px' }}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;