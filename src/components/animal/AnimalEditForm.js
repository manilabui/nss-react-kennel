import React, { Fragment, useState, useRef, useEffect } from "react";
import { updateItem, getItem } from "../../modules/apiManager";
import "./AnimalForm.css";

export default ({ animalId, match, history }) => {
    const [isLoading, setIsLoading] = useState(true);

    const name = useRef();
    const breed = useRef();

    const populateAnimal = () => {
        getItem("animals", match.params.animalId)
            .then(animal => {
                setIsLoading(false);
                name.current.value = animal.name;
                breed.current.value = animal.breed;
            });
    };
    useEffect(populateAnimal, []);

    const updateAnimal = () => {
        if (name.current.value === "" || breed.current.value === "") window.alert('Dawg, imma need a name AND breed.');
        else {
            setIsLoading(true);

            const animal = {
                name: name.current.value,
                breed: breed.current.value
            };

            updateItem("animals", animal).then(() => history.push("/animals"));
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
                        className="form-control"
                        ref={name}
                        id="animalName"
                    />
                    <label htmlFor="animalName">Animal name</label>

                    <input
                        type="text"
                        required
                        className="form-control"
                        ref={breed}
                        id="breed"
                    />
                    <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                    <button
                        type="button" 
                        disabled={isLoading}
                        onClick={updateAnimal}
                        className="btn btn-primary">
                        Submit
                    </button>
                    </div>
                </fieldset>
            </form>
        </Fragment>
    );
};