import React from 'react'

export default () => {
	return (
		<button className="button button--logout" onClick={function(){Accounts.logout()}}>LogOut</button>
	)
}