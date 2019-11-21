import React from 'react';

export default ({ name, id, deleteOwner }) => {
  return (
    <div className="card">
        <div className="card-content">
            <picture>
              <img src={require('./owner.svg')} alt="Owner" />
            </picture>
            <h3>Name: <span className="card-ownerName">{name}</span></h3>
            <button type="button" onClick={() => deleteOwner(id)}>Remove</button>
        </div>
    </div>
  );
};