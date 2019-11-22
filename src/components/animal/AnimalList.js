import React, { Fragment, useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import { getAll, deleteItem } from '../../modules/apiManager';

const AnimalList = ({ history }) => {
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
                history={history}
        	/>
    	);
    });

    return (
        <Fragment>
            <section className="section-content">
              <button 
                    type="button"
                    className="btn"
                    onClick={() => history.push("/animals/new")}>
                    Admit Animal
              </button>
            </section>
            <div className="container-cards">
            	{animalsArr}
            </div>
        </Fragment>
    );
};

export default AnimalList;