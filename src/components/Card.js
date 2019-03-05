import React from 'react';

const Card = props => {
  console.log(props);
  return (
    <div className={props.className}>
      <img
        src={props.image}
        alt={props.name}
        className={props.imgClass}
        onClick={() => props.handleCardClick(props.id)}
      />
    </div>
  );
};

export default Card;
