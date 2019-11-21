import React from 'react';

export default ({ name, id, deleteEmployee }) => {
  return (
    <div className="card">
        <div className="card-content">
            <picture>
              <img src={require('./employee.png')} alt="Employee" />
            </picture>
            <h3>Name: <span className="card-employeeName">{name}</span></h3>
            <button type="button" onClick={() => deleteEmployee(id)}>Fire</button>
        </div>
    </div>
  );
};