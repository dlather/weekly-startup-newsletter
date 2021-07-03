import React from "react";
import {
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import AppIcon from '../assets/creativity.png'
import { SignupForm } from '../logged_out/components/signUpForm';
function Home() {
    return <Grid container>
        <Container style={{height: '100px'}}></Container>
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
>
  <Grid item xs={3}>
    <img src={AppIcon} width="64px" height="64px"></img>
  </Grid>   

</Grid> 
<Container style={{height: '100px'}}></Container>
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
>
    <Grid item xs={12}>
        <Typography variant='h2'>
         Weekly Startup Ideas
        </Typography>
    </Grid>
    <Container style={{height: '10px'}}/>
    <Grid item xs={12}>
        <Typography variant='body1'>
         We deliver startup idea to your inbox weekly.
        </Typography>
    </Grid>
    <Container style={{height: '20px'}}/>
    <SignupForm style={{background: 'bottom'}}/>
    </Grid> 
    </Grid>
}

export default Home;