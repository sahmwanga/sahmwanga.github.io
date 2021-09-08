import React from 'react';

function BlocItem({ title, description }) {
  return (
    <div className="card">
      <img
        src="https://image.shutterstock.com/image-photo/grass-flowers-during-sunset-shadow-260nw-1267603696.jpg"
        class="card-img-top"
        height="300"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default BlocItem;
