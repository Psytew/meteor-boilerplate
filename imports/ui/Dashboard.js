import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import PrivateHeader from './PrivateHeader'
import Logout from './Logout'

export default () => {
	return (
		<div>
			<div className="header">
				<div className="header--content">
					<PrivateHeader title="Dashboard" />
					<Logout /> 
				</div>
			</div>
			<div className="page-content">
				Content			
			</div>
		</div>
	)
}