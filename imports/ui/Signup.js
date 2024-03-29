import React from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: ''
		}
	}
	onSubmit(e){
		e.preventDefault()

		let email = this.refs.email.value.trim()
		let password = this.refs.password.value

		if (password.length < 8) {
			return this.setState({error:"Sorry, your password must be at least eight characters."})
		}

		Accounts.createUser({email,password}, (err) => {
			if(err){
				this.setState({
					error:err.reason
				})
			} else {
				this.setState({
					error:""
				})
			}
		})

		// this.setState({
		// 	error: "Something went wrong."
		// })
	}
	render(){
		return (
			<div className="boxed-view">
				<div className="boxed-view__box">
					<p>Sign Up Component Here!</p>
					{this.state.error ? <p>{this.state.error}</p> : undefined}
					<form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
						<input type="email" ref="email" name="email" placeholder="Email" />
						<input type="password" ref="password" name="password" placeholder="Password" />
						<button className="button">Create Account</button>
					</form>
					<p><Link to="/">Already have an account?</Link></p>
				</div>
			</div>
		)
	}
}