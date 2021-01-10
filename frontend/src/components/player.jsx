import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;

  >input {
    margin-left: 6px;
    width: 50px;
    height: 50px;
  }
`;

const Player = ({
  canStart,
  canPause,
  canStop,
  onPlay,
  onPause,
  onStop,
}) => {
  const handlePlay = () => {
    onPlay();
  };

  return (
    <Wrapper>
      {canStart && <input type="button" value="Start" onClick={handlePlay} />}
      {canPause && <input type="button" value="Pause" onClick={onPause && onPause()} />}
      {canStop && <input type="button" value="Stop" onClick={onStop && onStop} />}
    </Wrapper>
  );
};

Player.propTypes = {
  canStart: PropTypes.bool,
  canPause: PropTypes.bool,
  canStop: PropTypes.bool,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onStop: PropTypes.func,
};

Player.defaultProps = {
  canStart: false,
  canPause: false,
  canStop: false,
  onPlay: null,
  onPause: null,
  onStop: null,
};

export default Player;
