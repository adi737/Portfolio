import React, { Suspense, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ThemeButton from 'styledComponents/ThemeButton.css'
import Loader from 'helpers/Loader';
const Skills = React.lazy(() => import('pages/Skills'));
const Learning = React.lazy(() => import('pages/Learning'));
const ListOfGoals = React.lazy(() => import('list-of-goals'));
const WeatherApp = React.lazy(() => import('weather-app'));

const Content = ({ setTheme }) => {
  console.log(`invoke Content`);

  const changeTheme = useCallback(() => {
    setTheme(theme => (
      { ...theme, isLightTheme: !theme.isLightTheme }
    )
    );
  }, [setTheme])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' />
          <Route path='/skills' component={Skills} />
          <Route path='/learning' component={Learning} />
          <Route path='/contact' />
          <Route path='/listOfGoals' component={ListOfGoals} />
          <Route path='/weatherApp' component={WeatherApp} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <ThemeButton >
        <p>Change theme</p>
        <button className='theme-button' onClick=
          {changeTheme}>
          <div className='circle'></div>
        </button>
      </ThemeButton>
    </>
  )
};

export default React.memo(Content);