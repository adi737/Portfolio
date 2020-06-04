import React from 'react';
import { NavLink } from 'react-router-dom';
import 'sass/Navigation.scss'

const Navigation = () => {
  console.log(`invoke Navigation`);
  return (
    <nav>
      <ul className='list'>
        <NavLink to='/' exact activeClassName="home" className='list__item'>Home</NavLink>
        <NavLink to='/about' activeClassName="about" className='list__item'>About</NavLink>
        <NavLink to='/skills' activeClassName="skills" className='list__item'>Skills</NavLink>
        <NavLink to='/learning' activeClassName="learning" className='list__item'>Learning</NavLink>
        <NavLink to='/contact' activeClassName="contact" className='list__item'>Contact</NavLink>
      </ul>
    </nav>
  )
};

export default React.memo(Navigation);