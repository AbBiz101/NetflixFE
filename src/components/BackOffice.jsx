import { React, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

export default function BackOffice() {
	const [movie, setMovie] = useState({
		Title: '',
		Year: '',
		Type: '',
	});
	const [image, setImage] = useState(null);

	const inputHandler = (propName, value) => {
		setMovie({ ...movie, [propName]: value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const formDt = new FormData();
			formDt.append('Poster', image);
			let post = await fetch('https://mynetflixapi.herokuapp.com/media', {
				method: 'POST',
				body: JSON.stringify(movie),
				headers: {
					'Content-type': 'application/json',
				},
			});
			const data = await post.json();
			console.log(data);
			if (post.ok) {
				const formDt = new FormData();
				formDt.append('Poster', image);
				let imgpost = await fetch(
					'https://mynetflixapi.herokuapp.com/media/' + data.imdbID + '/poster',
					{ method: 'POST', body: formDt },
				);
				if (imgpost.ok) {
					alert('Movie posted successfully.');
					setMovie({ Title: '', Year: '', Type: '' });
				}
			} else {
				alert('Posting Movie to the database failed.');
			}
		} catch (error) {
			console.error(error);
		}
	};

	const isFormComplete = () => {
		return (
			movie.Title.length > 0 && movie.Year.length > 0 && movie.Type.length > 0
		);
	};
	return (
		<Form onSubmit={submitHandler} className="container mt-5">
			<Form.Group className="title-container" controlId="formGridAddress2">
				<Form.Label>Title</Form.Label>
				<Form.Control
					required
					type="text"
					value={movie.Title}
					onChange={(e) => {
						inputHandler('Title', e.target.value);
					}}
					placeholder="Title of the movie"
				/>
			</Form.Group>

			<Form.Group className="info-container">
				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Year</Form.Label>
					<Form.Control
						required
						type="text"
						value={movie.Year}
						onChange={(e) => {
							inputHandler('Year', e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Type</Form.Label>
					<Form.Control
						required
						type="text"
						value={movie.Type}
						onChange={(e) => {
							inputHandler('Type', e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>Poster</Form.Label>
					<Form.Control
						type="file"
						required
						onChange={(e) => setImage(e.target.files[0])}
					/>
				</Form.Group>
			</Form.Group>

			<Button disabled={!isFormComplete} variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
