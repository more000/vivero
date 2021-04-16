import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../img/flower-shop.png';
import CartWidget from './CartWidget';
import './NavBar.css';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      
      <h1><img src={logo} alt='flower-shop' height='80px' width='80px'></img>VIVERO </h1>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" />
        <Tab label="Productos" />
        <Tab label="Servicios" />
        <Tab label="Contacto" />
        <CartWidget/>
      </Tabs>
    </Paper>
  );
}
