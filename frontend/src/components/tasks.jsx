import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTasks } from '../util/api';
import TaskItem from './task-item';
import { taskBorder } from '../util/colors';

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

const Tasks = () => {
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    getTasks().then((response) => setUserTasks(response.data));
  });

  const addTask = () => {
    throw new Error('Not implemented');
  };

  return (
    <Wrapper>
      <Header>
        <h1>Tasks</h1>
        <AddButton onClick={addTask}>+</AddButton>
      </Header>
      {userTasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </Wrapper>
  );
};

export default Tasks;
