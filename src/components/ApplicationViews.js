import { Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
import AnimalDetail from './animal/AnimalDetail';
import LocationList from './location/LocationList';
import LocationDetail from './location/LocationDetail';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';

export default () => {
  return (
    <Fragment>
      <Route exact path="/" render={props => <Home />} />
      <Route exact path="/animals" render={props => <AnimalList />} />
      <Route path="/animals/:animalId(\d+)" render={props => {
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)}/>
      }} />
      <Route exact path="/locations" render={props => <LocationList />} />
      <Route path="/locations/:locationId(\d+)" render={props => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
      }} />
      <Route path="/employees" render={props => <EmployeeList />} />
      <Route path="/owners" render={props => <OwnerList />} />
    </Fragment>
  );
};