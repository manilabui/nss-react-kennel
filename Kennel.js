import React, { Component } from 'react'; 
import './Kennel.css';

class Kennel extends Component {
    render() {
        return (
            <div>
                <h2>Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h2>
                <address>
                    Visit Us at the Nashville North Location
                    <br />500 Puppy Way
                </address>
            </div>
        );
    };
};

export default Kennel;