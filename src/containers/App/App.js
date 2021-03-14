import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

//My containers
import Welcome from "../Welcome/Welcome";
import Intro from '../Intro/Intro';

function App() {
  const classes = useStyle();

  return (
    <Router>
      <div className={classes.app}>
        <Route path="/" exact component={Welcome} />
        <Route path="/intro" component={Intro} />
      </div>
    </Router>
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