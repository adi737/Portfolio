import React from 'react';
import htmlpicS from 'img/html-300.png';
import htmlpicL from 'img/html-1300.png';
import reactpicS from 'img/react-120.png';
import reactpicL from 'img/react-500.png';
import sasspicS from 'img/sass-128.png';
import sasspicL from 'img/sass-512.png';
import gitpic from 'img/git.png';
import SkillsContainer from 'styledComponents/SkillsContainer.css';

const Skills = () => {
  console.log(`invoke Skills`);
  return (
    <SkillsContainer>
      <picture>
        <source media="(max-width: 799px)" srcSet={htmlpicS} />
        <source media="(min-width: 800px)" srcSet={htmlpicL} />
        <img className='pic' src={htmlpicL} alt='' />
      </picture>
      <picture>
        <source media="(max-width: 799px)" srcSet={sasspicS} />
        <source media="(min-width: 800px)" srcSet={sasspicL} />
        <img className='pic2' src={sasspicL} alt='' />
      </picture>
      <picture>
        <source media="(max-width: 799px)" srcSet={reactpicS} />
        <source media="(min-width: 800px)" srcSet={reactpicL} />
        <img className='pic3' src={reactpicL} alt='' />
      </picture>
      <img className='pic4' src={gitpic} alt='' />
      <p>
        My skills include mainly front-end technologies such as JavaScript, HTML, CSS, SASS, React.js. I'm also familiar with configuration webpack and using the backend delivery platform "Firebase" as well distributed version control system GIT. I have basic practical and theoretical knowledge of backend technologies such as node.js, express.js and noSQL databasa like mongoDB, Firestore
      </p>
    </SkillsContainer>
  )
};

export default Skills;