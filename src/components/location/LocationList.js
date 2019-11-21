import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import { getAll, deleteItem } from '../../modules/apiManager';

export default () => {
    const [locations, setLocations] = useState([]);
	useEffect(() => { getAll("locations").then(locations => setLocations(locations)) }, []);

	const deleteLocation = id => {
		deleteItem("locations", id)
			.then(() => getAll("locations")
	    		.then(locations => setLocations(locations))
	    	);
	};

    const locationsArr = locations.map(location => {
    	const { id, name } = location;

    	return (
        	<LocationCard
        		key={id}
        		id={id}
        		name={name}
        		deleteLocation={deleteLocation}
        	/>
    	);
    });

    return (
        <div className="container-cards">
        	{locationsArr}
        </div>
    );
};