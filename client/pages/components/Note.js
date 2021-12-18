function Note ({ title, content, id, setNotes, deleteNote }) {
	return (
		<div className="column is-12-mobile is-6-tablet is-3-desktop">
			<div className="card">
				<div className="card-content">
					<div className="content">
						<p className="title is-size-5">{title}</p>
						{content}
					</div>
				</div>
				<footer className="card-footer">
					<a className="card-footer-item" href="#" onClick={async () => {
						let { data } = await deleteNote({ variables: { id: id } });
						
						setNotes(data.deleteNote)
					}}>Delete</a>
				</footer>
			</div>
		</div>
	)
}

export default Note;
