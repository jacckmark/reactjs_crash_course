import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Task = ({ id, name, description, status, assignee, onDelete }) => {
  const getBadgeType = status => {
    if (status === "to do") {
      return "info";
    } else if (status === "in progress") {
      return "warning";
    } else if (status === "in review") {
      return "danger";
    } else if (status === "done") {
      return "success";
    } else {
      return "secondary";
    }
  };
  return (
    <div className="card mb-3">
      <div className="card-header">
        <div className="container">
          <div className="row justify-content-between">
            <span>{name}</span>
            <FaTimes style={{ cursor: "pointer" }} onClick={() => onDelete(id)} />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-subtitle">{description}</div>
        <div className="container">
          <div className="row justify-content-center">
            <h3>
              <div className={`badge bg-${getBadgeType(status)} mr-2`}>{status}</div>
            </h3>
            <h3>
              <div className="badge bg-secondary">{assignee}</div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Task.defaultProps = {
  assignee: "no one",
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default Task;
