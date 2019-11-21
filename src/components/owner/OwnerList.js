import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import { getAll, deleteItem } from '../../modules/apiManager';

export default () => {
    const [owners, setOwners] = useState([]);
	useEffect(() => { getAll("owners").then(owners => setOwners(owners)) }, []);

	const deleteOwner = id => {
		deleteItem("owners", id)
			.then(() => getAll("owners")
	    		.then(owners => setOwners(owners))
	    	);
	};

    const ownersArr = owners.map(owner => {
    	const { id, name } = owner;

    	return (
        	<OwnerCard
        		key={id}
        		id={id}
        		name={name}
        		deleteOwner={deleteOwner}
        	/>
    	);
    });

    return (
        <div className="container-cards">
        	{ownersArr}
        </div>
    );
};