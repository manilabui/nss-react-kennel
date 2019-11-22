import React from 'react';
import { Link } from "react-router-dom";
import "./Animal.css";

export default ({ id, name, breed, deleteAnimal, history }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petName">{name}</span></h3>
        <p>Breed: {breed}</p>
        <Link to={`/animals/${id}`}><button>Details</button></Link>
        <button 
          type="button"
          onClick={() => history.push(`/animals/${id}/edit`)}
        >Edit</button>
        <button type="button" onClick={() => deleteAnimal(id)}>Discharge</button>
      </div>
    </div>
  );
};