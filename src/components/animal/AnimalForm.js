import React, { Fragment, Component } from 'react';
// import React, { Fragment, useState } from 'react';
import { postItem } from '../../modules/apiManager';
import './AnimalForm.css';

// export default () => {
//     const [name, setName] = useState('');
//     const [breed, setBreed] = useState('');
//     let [isLoading, setIsLoading] = useState(false);

//     const handleFieldChange = e => {

//     }
// };

class AnimalForm extends Component {
    state = {
        animalName: "",
        breed: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
            };

            // Create the animal and redirect user to animal list
            postItem("animals", animal)
                .then(() => this.props.history.push("/animals"));
        }
    };

    render(){

        return(
            <Fragment>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="animalName"
                        placeholder="Animal name"
                        />
                        <label htmlFor="animalName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="breed"
                        placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </Fragment>
        )
    }
}

export default AnimalForm