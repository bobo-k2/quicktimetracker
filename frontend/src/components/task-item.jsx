import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { taskBorder } from '../util/colors';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid ${taskBorder};
`;

const Task = ({ task }) => (
  <Wrapper>
    <b>{task.name}</b>
  </Wrapper>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
