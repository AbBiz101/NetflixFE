import { React, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BackOffice() {
	const [movie, setMovie] = useState({
		Title: '',
		Year: '',
		Type: '',
		Poster: '',
	});

	const [image, setImage] = useState(null);

	const inputHandler = (propName, value) => {
		setMovie({ ...movie, [propName]: value });
	};

	const isFormComplete = () => {
		return (
			movie.Title.length > 0 && movie.Year.length > 0 && movie.Type.length > 0
		);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			let post = await fetch('http://localhost:3004/media', {
				method: 'POST',
				body: JSON.stringify(movie),
				headers: {
					'Content-type': 'application/json',
				},
			});
			if (post.ok) {
				let data = await post.json();
				console.log(data);
				try {
					let formDt = new FormData();
					formDt.append('Poster', image);
					let imgpost = await fetch(
						'http://localhost:3004/media/' + data.imdbID + '/poster',
						{ method: 'POST', body: formDt },
					);
					if (imgpost.ok) {
						alert('Movie posted successfully.');
						setMovie({ Title: '', Year: '', Type: '', Poster: '' });
					}
				} catch (error) {
					console.error(error);
				}
			} else {
				alert('Posting Movie to the database failed.');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Form onSubmit={submitHandler} className="container col-8 container-form-movie">
				<h3> Movie to Database Form</h3>

				<Form.Group className="title-container" controlId="formGridAddress2">
					<h5>Title</h5>
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
					<Form.Group controlId="formGridZip">
						<h5>Year</h5>
						<Form.Control
							required
							type="text"
							value={movie.Year}
							onChange={(e) => {
								inputHandler('Year', e.target.value);
							}}
						/>
					</Form.Group>

					<Form.Group controlId="formGridZip">
						<h5>Type</h5>
						<Form.Control
							required
							type="text"
							value={movie.Type}
							onChange={(e) => {
								inputHandler('Type', e.target.value);
							}}
						/>
					</Form.Group>
					<Form.Group controlId="formGridCity">
						<h5>Poster </h5>
						<input
							type="file"
							accept="image/png, image/jpeg"
							required
							onChange={(e) => {
								setImage(e.target.files[0]);
							}}
						/>
					</Form.Group>
				</Form.Group>

				<Button disabled={!isFormComplete} variant="primary" type="submit">
					Create new Movie
				</Button>
			</Form>

			{/* <Form onSubmit={submitHandler} className="container mt-5">
				<Form.Group className="title-container" controlId="formGridAddress2">
					<h5>Title</h5>
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
						<h5>Year</h5>
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
						<h5>Type</h5>
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
						<h5>Poster</h5>
						<Form.Control
							type="file"
							accept="image/png, image/jpeg"
							required
							onChange={(e) => {
								setImage(e.target.files[0]);
							}}
						/>
					</Form.Group>
				</Form.Group>

				<Button disabled={!isFormComplete} variant="primary" type="submit">
					Edit A Movie
				</Button>
			</Form> */}
		</>
	);
}
