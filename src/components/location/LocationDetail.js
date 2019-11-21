import React, { useState, useEffect } from 'react';
import { getItem } from '../../modules/apiManager';

export default ({ locationId }) => {
    const [name, setName] = useState('');

    useEffect(() => { getItem("locations", locationId)
        .then(({ name }) => setName(name))
    }, [locationId]);

    return (
        <div className="card">
         <div className="card-content">
           <picture>
             <img src={require('./location.svg')} alt="Location" />
           </picture>
             <h3>Name: <span style={{ color: 'darkslategrey' }}>{name}</span></h3>
         </div>
       </div>
    );
};