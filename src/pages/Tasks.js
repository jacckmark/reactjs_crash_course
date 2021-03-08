import React from "react";
import PropTypes from "prop-types";
import Task from "../components/Task";
import Button from "../components/Button";

const Tasks = ({ tasks, onDelete }) => {
  const clickBtn = () => {
    console.log("clicked button");
  };
  return (
    <div className="container">
      <h4 className="mt-3">Currently there are no tasks</h4>
      <Button color="success" text="go to apps" onClick={clickBtn} />
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
