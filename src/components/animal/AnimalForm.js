import React, { Fragment, useState, useRef } from 'react';
import { postItem } from '../../modules/apiManager';
import './AnimalForm.css';

export default ({ history }) => {
    const [isLoading, setIsLoading] = useState(false);

    const name = useRef();
    const breed = useRef();

    const constructNewAnimal = (nameInput, breedInput) => {
        if (nameInput === "" || breedInput === "") window.alert('Dawg, imma need a name AND breed.');
        else {
            setIsLoading(true);

            const animal = {
                name: name.current.value,
                breed: breed.current.value
            };

            postItem("animals", animal).then(() => history.push("/animals"));
        };
    };

    return (
        <Fragment>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            ref={name}
                            id="animalName"
                            placeholder="Animal name"
                        />
                        <label htmlFor="animalName">Name</label>
                        <input
                            type="text"
                            required
                            ref={breed}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewAnimal}>
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </Fragment>
    );
};