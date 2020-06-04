import React from 'react';
import pic from 'img/express_node_mongo.jpeg';
import SkillsContainer from 'styledComponents/SkillsContainer.css';

const Learning = () => {
  console.log(`invoke Learning`);
  return (
    <SkillsContainer>
      <img className='pic' src={pic} alt="" />
      <p>In future i would like to improve in backend. Especially JavaScript techologies like Node. My plan is to learn other languages such as phyton, PHP as well. Except noSQL database, I plan to learn SQL databases such as mySQL. At this moment my main goal is to start write MERN application (MERN is a shortcut from MongoDB, Express, React, Nodejs), which combine frontend as React, backend as Express and database as mongoDB to fullstack application but in further future I'm going to learn many more tecnologies and approaches to programming</p>
    </SkillsContainer>
  )
};

export default Learning;