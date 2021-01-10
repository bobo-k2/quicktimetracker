import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { taskBorder } from '../util/colors';
import ValueDisplay from './value-display';
import Player from './player';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${taskBorder};
`;

const Task = ({
  task,
  onStart,
}) => {
  const handleStart = () => {
    if (onStart) {
      onStart(task.id);
    }
  };

  return (
    <Wrapper>
      <ValueDisplay labelText="name" value={task.name} />
      <ValueDisplay labelText="description" value={task.description} />
      <ValueDisplay labelText="expected duration" value={task.expectedDuration} valueAlignment="right" />
      <Player
        canStart={!task.isRunning}
        canPause={task.isRunning}
        canStop={task.isRunning && !task.isFinished}
        onPlay={handleStart}
      />
    </Wrapper>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    expectedDuration: PropTypes.number,
    isRunning: PropTypes.bool,
    isFinished: PropTypes.bool,
  }).isRequired,
  onStart: PropTypes.func,
};

Task.defaultProps = {
  onStart: null,
};

export default Task;
