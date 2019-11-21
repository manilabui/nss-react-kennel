import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import { getAll, deleteItem } from '../../modules/apiManager';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);
    
	useEffect(() => { getAll("animals").then(animals => setAnimals(animals)) }, []);

	const deleteAnimal = id => {
		deleteItem("animals", id)
			.then(() => getAll("animals")
	    		.then(animals => setAnimals(animals))
	    	);
	};

    const animalsArr = animals.map(animal => {
    	const { id, name, breed } = animal;

    	return (
        	<AnimalCard
        		key={id}
        		id={id}
        		name={name}
        		breed={breed}
        		deleteAnimal={deleteAnimal}
        	/>
    	);
    });


    return (
        <div className="container-cards">
        	{animalsArr}
        </div>
    );
};

export default AnimalList;