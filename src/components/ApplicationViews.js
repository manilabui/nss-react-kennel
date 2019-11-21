import { Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
import AnimalForm from './animal/AnimalForm';
import AnimalDetail from './animal/AnimalDetail';
import LocationList from './location/LocationList';
import LocationDetail from './location/LocationDetail';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';

export default () => {
  return (
    <Fragment>
      <Route exact path="/" render={props => <Home />} />
      <Route exact path="/animals" render={props => <AnimalList {...props} />} />
      <Route path="/animals/new" render={props => <AnimalForm {...props} />} />
      <Route path="/animals/:animalId(\d+)" render={props => {
        // this.props and props are different
        // this.props is from the parent component while props are from react router dom
        // could put history={props.history}
        // match={props.match}
        // location={props.location}
        // or props={props} but we would have to do this.props.props.history in order to access that info within animalDetail
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
      }} />
      <Route exact path="/locations" render={props => <LocationList />} />
      <Route path="/locations/:locationId(\d+)" render={props => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
      }} />
      <Route path="/employees" render={props => <EmployeeList />} />
      <Route path="/owners" render={props => <OwnerList />} />
    </Fragment>
  );
};