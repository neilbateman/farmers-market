import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import farmersmarkets from './../assets/images/farmersmarkets.jpg';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import ScheduleFeed from './ScheduleFeed';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    padding: 50,
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    opacity: 0.85,
  },
  image: {
    height: 300,
    padding: 50,
    textAlign: 'center',

  }
});

const backgroundImage = {
  backgroundImage: `url(${farmersmarkets})`
};

export default function Splash() {
  const classes = useStyles();
  return (
    <div style = {backgroundImage} className={classes.image}>
      <div>
        <Card className={classes.card}>
          <h1>Lee & Bateman's Markets</h1>
        </Card>
      </div>
    </div>
  );
}
