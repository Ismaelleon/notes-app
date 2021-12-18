const Note = require('../models/note');

async function getNotes () {
	try {
		let notes = await Note.find({});

		notes = notes.map(note => {
			return {
				id: note._id.toString(),
				title: note.title,
				content: note.content
			}
		})

		return notes
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	getNotes
};
