import React, { useState, useEffect } from 'react';
import { getItem, deleteItem } from '../../modules/apiManager';

export default ({ animalId, history }) => {
    const [currAnimal, setCurrAnimal] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getAnimal = () => {
        getItem("animals", animalId)
            .then(animal => {
                setCurrAnimal(animal);
                setIsLoading(false);
            });
    };

    useEffect(getAnimal, []);

    const handleDelete = () => {
        setIsLoading(true);
        deleteItem("animals", animalId)
            .then(() => history.push("/animals"));
    };

    const { name, breed } = currAnimal;

    return (
        <div className="card">
            <div className="card-content">
                <picture><img src={require('./dog.svg')} alt="My Dog" /></picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{name}</span></h3>
                <p>Breed: {breed}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button>
            </div>
        </div>
    );
};