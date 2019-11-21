import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import { getAll, deleteItem } from '../../modules/apiManager';

export default () => {
    const [employees, setEmployees] = useState([]);
	useEffect(() => { getAll("employees").then(employees => setEmployees(employees)) }, []);

	const deleteEmployee = id => {
		deleteItem("employees", id)
			.then(() => getAll("employees")
	    		.then(employees => setEmployees(employees))
	    	);
	};

    const employeesArr = employees.map(employee => {
    	const { id, name } = employee;

    	return (
        	<EmployeeCard
        		key={id}
        		id={id}
        		name={name}
        		deleteEmployee={deleteEmployee}
        	/>
    	);
    });

    return (
        <div className="container-cards">
        	{employeesArr}
        </div>
    );
};