import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Login from './auth/Login';
import AnimalList from './animal/AnimalList';
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';
import AnimalDetail from './animal/AnimalDetail';
import LocationList from './location/LocationList';
import LocationDetail from './location/LocationDetail';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';

export default () => {
  const isAuthenticated = () => localStorage.getItem("credentials");

  return (
    <Fragment>
      <Route exact path="/" render={props => <Home />} />
      <Route path="/login" component={Login} />
      <Route exact path="/animals" render={props => {
        return isAuthenticated ? <AnimalList {...props} /> : <Redirect to="/login" />
      }} />
      <Route path="/animals/new" render={props => <AnimalForm {...props} />} />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        // this.props and props are different
        // this.props is from the parent component while props are from react router dom
        // could put history={props.history}
        // match={props.match}
        // location={props.location}
        // or props={props} but we would have to do this.props.props.history in order to access that info within animalDetail
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => <AnimalEditForm {...props} /> }/>
      <Route exact path="/locations" render={props => {
        return isAuthenticated ? <LocationList {...props} /> : <Redirect to="/login" />
      }} />
      <Route path="/locations/:locationId(\d+)" render={props => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
      }} />
      <Route path="/employees" render={props => {
        return isAuthenticated ? <EmployeeList {...props}/> : <Redirect to="/login" />
      }} />
      <Route path="/owners" render={props => {
        return isAuthenticated ? <OwnerList {...props}/> : <Redirect to="/login" />
      }} />
    </Fragment>
  );
};