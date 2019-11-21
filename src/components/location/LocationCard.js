import React from 'react';
import { Link } from "react-router-dom";

export default ({ name, id, deleteLocation }) => {
  return (
    <div className="card">
        <div className="card-content">
            <picture>
              <img src={require('./location.svg')} alt="Location" />
            </picture>
            <h3>Name: <span className="card-locationName">{name}</span></h3>
            <Link to={`/locations/${id}`}><button>Details</button></Link>
            <button type="button" onClick={() => deleteLocation(id)}>Close</button>
        </div>
    </div>
  );
};