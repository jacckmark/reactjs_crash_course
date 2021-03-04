import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="container">
      {tasks.map((task, index) => (
        <Task
          key={index}
          id={task.id}
          name={task.name}
          description={task.description}
          status={task.status}
          assignee={task.assignee}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

Tasks.defaultProps = {
  tasks: [],
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Tasks;
