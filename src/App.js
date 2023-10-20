import React, { useEffect } from 'react';
// import { Counter } from './features/counterSlice';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        //logged in
        console.log(user);
      } else {
        //logged out
      }
    });

    return unsub;
  }, []);

  return (
    <div className="app">
      <Router>
        { !user ? <LoginScreen /> : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        ) }
      </Router>
    </div>
  );
}

export default App;

