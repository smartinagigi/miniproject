import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Professional.css';

const Professional = () => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate('/');
  };

  return (
    <div className="professional">
      <h2>My Project</h2>
      <div className="project-list">
        <button className="btn btn-primary" onClick={handleProjectClick}>Project 1</button>
        <button className="btn btn-primary" onClick={handleProjectClick}>Project 2</button>
        <button className="btn btn-success">+ Add New Project</button>
        <button className="btn btn-danger">Delete My Project</button>
      </div>
    </div>
  );
};

export default Professional;