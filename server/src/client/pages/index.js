import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import HTMLHeader from './components/HTMLHeader';
import Navbar from './components/Navbar';
import Note from './components/Note';

const GET_NOTES_QUERY = gql`
	query {
		notes {
			id
			title
			content
		}
	}
`;

const DELETE_NOTE_MUTATION = gql`
	mutation DeleteNote ($id: String!) {
		deleteNote (id: $id) {
			id
			title
			content
		}
	}
`;

function Home () {
	let [notes, setNotes] = useState([]);

	let { loading, error, data } = useQuery(GET_NOTES_QUERY);
	let [deleteNote] = useMutation(DELETE_NOTE_MUTATION);

	useEffect(() => {
		if (!loading && !error) {
			setNotes(data.notes)
		}
	}, [loading])

	return (
		<div>
			<HTMLHeader />
			<Navbar setNotes={setNotes} />
			
			<main className="columns p-3 is-multiline">
				{notes.length > 0 ? notes.map((note, index) => 
					<Note title={note.title} content={note.content} id={note.id} key={note.id} setNotes={setNotes} deleteNote={deleteNote} />
				) : <p className="is-size-5 has-text-centered p-2">No notes yet</p>}
			</main>
		</div>
	);
}

export default Home;
