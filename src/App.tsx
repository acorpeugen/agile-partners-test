import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { Home, Preloader } from './components';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Preloader and loader GSAP animation
    const preloader = document.querySelector('.preloader-js');
    const loader = document.querySelector('.loader-js');

    gsap
      .timeline()
      .to([preloader, loader], { opacity: 0, duration: 1.5 }, '+=1.3');
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Switch>
            <Route path="/" render={() => <Home />} />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
