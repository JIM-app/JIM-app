import React from 'react';

import StudentInfo from './StudentInfo/StudentInfo.jsx'
import ParentInfo from './ParentInfo/ParentInfo.jsx'
import DemographicVolunteerInfo from './DemographicVolunteerInfo/DemographicVolunteerInfo.jsx'
import HealthTransportationInfo from './HealthTransportationInfo/HealthTransportationInfo.jsx'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



export default class App extends React.Component {

	constructor() {

		super()
	}

  render() {
		return (
			<Router>
				<div>
					<Route exact path = '/' component = {StudentInfo}/>
					<Route path = '/demographic' component = {DemographicVolunteerInfo}/>
					<Route path = '/parentinfo' component = {ParentInfo}/>
					<Route path = '/healthinfo' component = {HealthTransportationInfo}/>

				</div>
			</Router>


		)
  }
}

