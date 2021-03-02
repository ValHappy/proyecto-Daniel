import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//My components

//My containers
import Welcome from "../Welcome/Welcome";
import Intro from '../Intro/Intro';

function App() {
  const classes = useStyle();

  return (
    <div className={classes.app}>
      <Intro />
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  app: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default App;