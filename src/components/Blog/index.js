import React from 'react';
import BlogItem from './BlogItem';

function Bloc() {
  return (
    <>
      <div className="col">
        <BlogItem
          title="Frontend"
          description="Some quick example text to build on the card title and make up
          the bulk of the card's content."
        />
      </div>
      <div className="col">
        <BlogItem
          title="Backend"
          description="Some quick example text to build on the card title and make up
      the bulk of the card's content."
        />
      </div>
    </>
  );
}

export default Bloc;
