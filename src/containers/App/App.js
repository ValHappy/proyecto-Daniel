import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Navegation
import { BrowserRouter as Router, Route } from 'react-router-dom';

//My containers
import Start from "../Start/Start";
import Welcome from "../Welcome/Welcome";
import Intro from '../Intro/Intro';
import Exercise from '../Exercise/Exercise';
import Final from '../Final/Final';
import Login from '../Login/Login';

function App() {
  const classes = useStyle();

  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <div className={classes.app}>
        <Route path="/" exact component={Start} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/intro" component={Intro} />
        <Route path="/exercise" component={Exercise} />
        <Route path="/final" component={Final} />
        <Route path="/login" component={Login} />
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