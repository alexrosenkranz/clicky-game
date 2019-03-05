import React from 'react';

const Navbar = props => {
  // destructure props here
  const {topScore, currentScore} = props;
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-space-between">
      <span className="navbar-brand mb-0">Clicky Game</span>
      <span className="scoreInfo text-light">
        Current Score: {currentScore} || Top Score: {topScore}
      </span>
    </nav>
  )
}

export default Navbar;
