import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { startTask, getTasks } from '../util/api';
import { getTasks as getTasksFromStore } from '../redux/selectors';
import TaskItem from './task-item';
import { taskBorder } from '../util/colors';
import { ADD_TASKS } from '../redux/actionTypes';
import store from '../redux/store';

const Wrapper = styled.div`
  margin: 50px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AddButton = styled.h1`
  border: 1px solid ${taskBorder};
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
`;

const Tasks = ({ tasks }) => {
  // const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    getTasks().then((response) => {
      // setUserTasks(response.data);
      store.dispatch({ type: ADD_TASKS, payload: response.data });
    });
  }, []);

  const addTask = () => {
    throw new Error('Not implemented');
  };

  const handleTaskStart = (taskId) => {
    startTask(taskId);
  };

  return (
    <Wrapper>
      <Header>
        <h1>Tasks</h1>
        <AddButton onClick={addTask}>+</AddButton>
      </Header>
      {tasks && tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          onStart={handleTaskStart}
        />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  const tasks = getTasksFromStore(state);
  return { tasks };
};

Tasks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tasks: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Tasks);
