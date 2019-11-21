import React, { useState, useEffect } from 'react';
import { getItem, deleteItem } from '../../modules/apiManager';

export default ({ animalId, history }) => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isSubscribed = true;

        getItem("animals", animalId)
            .then(({ name, breed }) => {
                if (isSubscribed) {
                    setName(name);
                    setBreed(breed);
                    setIsLoading(false);
                };
            });

        return () => isSubscribed = false;
    }, [animalId, isLoading]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteItem(animalId)
            .then(() => history.push("/animals"));
    };

    return (
        <div className="card">
         <div className="card-content">
           <picture>
             <img src={require('./dog.svg')} alt="My Dog" />
           </picture>
             <h3>Name: <span style={{ color: 'darkslategrey' }}>{name}</span></h3>
             <p>Breed: {breed}</p>
             <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button>
         </div>
       </div>
    );
};