import React, { useState, useEffect } from 'react';
import { getItem } from '../../modules/apiManager';
import './AnimalDetail.css';

export default ({ animalId }) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');

    useEffect(() => { getItem("animals", animalId).then(({ name, breed }) => {
        setName(name);
        setBreed(breed)
    })}, [animalId]);

    return (
        <div className="card">
         <div className="card-content">
           <picture>
             <img src={require('./dog.svg')} alt="My Dog" />
           </picture>
             <h3>Name: <span style={{ color: 'darkslategrey' }}>{name}</span></h3>
             <p>Breed: {breed}</p>
         </div>
       </div>
    );
};