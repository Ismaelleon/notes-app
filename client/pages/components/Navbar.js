import { createRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Link from 'next/link';

const NEW_NOTE_MUTATION = gql`
	mutation NewNote($title: String!, $content: String!) {
		newNote(title: $title, content: $content) {
			id
			title
			content
		}
	}
`;

function Navbar ({ setNotes }) {
	let newNoteModal = createRef();

	let [noteTitle, setNoteTitle] = useState(''),
		[noteContent, setNoteContent] = useState('');
	let [newNote, { loading, error, data }] = useMutation(NEW_NOTE_MUTATION);


	function toggleModal () {
		newNoteModal.current.classList.toggle('is-active')
	}

	return (
		<div>
			<nav className="navbar is-flex flex-direction-row" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link href="/"><a className="navbar-item has-text-weight-semibold is-size-4">Notes</a></Link>
				</div>

				<div className="ml-auto navbar-end">
					<div className="navbar-item">
						<button className="button is-primary" onClick={toggleModal}>New Note</button>
					</div>
				</div>
			</nav>

			<div className="modal" ref={newNoteModal}>
				<div className="modal-background"></div>

				<div className="modal-card">
					<header className="modal-card-head">
						<p className="modal-card-title">New Note</p>
						<button className="delete" aria-label="close" onClick={toggleModal}></button>
					</header>
		
					<section className="modal-card-body">
						<div className="field">
							<label htmlFor="note-title" className="label">Title</label>
							<div className="control">
								<input className="input" 
									type="text" 
									id="note-title" 
									placeholder="Do something ..."
									onInput={e => setNoteTitle(e.target.value)}/>
							</div>
						</div>

						<div className="field">
							<label htmlFor="note-content" className="label">Content</label>
							<div className="control">
								<textarea className="textarea" 
									id="note-content" 
									placeholder="Bla bla bla"
									onInput={e => setNoteContent(e.target.value)}></textarea>
							</div>
						</div>
					</section>

					<footer className="modal-card-foot">
						<button className="button is-success" onClick={async () => {
							if (noteTitle !== '' && contentTitle !== '') {
								toggleModal()

								let { data } = await newNote({ variables: { title: noteTitle, content: noteContent } });
								setNotes(data.newNote)
							}

						}}>Save Note</button>
						<button className="button" onClick={() => {
							toggleModal()
						}}>Cancel</button>
					</footer>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
