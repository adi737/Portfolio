import React from 'react';
import pic640 from 'img/code-640.jpg';
import pic1280 from 'img/code-1280.jpg';
import { Link } from 'react-router-dom';
import todo from 'img/todo.png';
import weather from 'img/weather.png';
import IconContainer from 'styledComponents/IconContainer.css';
import HomeContainer from 'styledComponents/HomeContainer.css'

const Home = () => {
  console.log(`invoke Home`);
  return (
    <HomeContainer>
      <picture>
        <source media="(max-width: 799px)" srcSet={pic640} />
        <source media="(min-width: 800px)" srcSet={pic1280} />
        <img className='pic' src={pic1280} alt='' />
      </picture>

      <p>Below you can see Weather-App and ListOfGoals web application by clicking it</p>

      <IconContainer>
        <Link to='/listOfGoals' className='project-link'>
          <figure>
            <img src={todo} alt="" />
            <figcaption>List-Of-Goals</figcaption>
          </figure>
        </Link>
        <Link to='/weatherApp' className='project-link'>
          <figure>
            <img src={weather} alt="" />
            <figcaption>Weather-App</figcaption>
          </figure>
        </Link>
      </IconContainer>
    </HomeContainer>
  )
};

export default Home;