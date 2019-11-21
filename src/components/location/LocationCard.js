import React from 'react';

export default ({ name, id, deleteLocation }) => {
  return (
    <div className="card">
        <div className="card-content">
            <picture>
              <img src={require('./location.svg')} alt="Location" />
            </picture>
            <h3>Name: <span className="card-locationName">{name}</span></h3>
            <button type="button" onClick={() => deleteLocation(id)}>Close</button>
        </div>
    </div>
  );
};