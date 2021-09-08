import React from 'react';
import SkillsItem from './SkillsItem';

function Skills() {
  return (
    <>
      <div className="col">
        <SkillsItem
          title="Frontend"
          description="Some quick example text to build on the card title and make up
          the bulk of the card's content."
        />
      </div>
      <div className="col">
        <SkillsItem
          title="Backend"
          description="Some quick example text to build on the card title and make up
      the bulk of the card's content."
        />
      </div>
      <div className="col">
        <SkillsItem
          title="Others"
          Frontend
          description="Some quick example text to build on the card title and make up
      the bulk of the card's content."
        />
      </div>
    </>
  );
}

export default Skills;
