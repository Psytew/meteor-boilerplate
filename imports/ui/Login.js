import React from 'react'
import { Link } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'

export default class Login extends React.Component {
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

		Meteor.loginWithPassword({email},password,(err) => {
			if(err){
				this.setState({
					error:"Unable to log in; check your username or password."
				})
			} else {
				this.setState({
					error:""
				})
			}
		})

		
	}
	render(){
		return (
			<div className="boxed-view">
				<div className="boxed-view__box">
					<h1>Login</h1>
					{this.state.error ? <p>{this.state.error}</p> : undefined}
					<form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
						<input type="email" ref="email" name="email" placeholder="Email" />
						<input type="password" ref="password" name="password" placeholder="Password" />
						<button className="button">Login</button>
					</form>
					<p><Link to="/signup">Don't have an account?</Link></p>
				</div>
			</div>
		)
	}
}