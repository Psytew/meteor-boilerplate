import { Meteor } from 'meteor/meteor'
import SimpleScehma from 'simpl-schema'

SimpleScehma.defineValidationErrorTransform((e) => {
	return new Meteor.Error(400,e.message)
})