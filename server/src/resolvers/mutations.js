const mongoose = require('mongoose');
const { getNotes } = require('./queries');
const Note = require('../models/note');

async function newNote (parent, { title, content }) {
	try {
		let newNote = new Note({
			title,
			content
		})

		await newNote.save()
		
		return getNotes()
	} catch (error) {
		console.log(error)
	}
}

async function deleteNote (parent, { id }) {
	try {
		let deletedNote = await Note.deleteOne({ _id: mongoose.Types.ObjectId(id) });

		console.log(deletedNote)
		
		return getNotes()
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	newNote,
	deleteNote
};
