import { React, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

export default function BackOffice() {
	const [movie, setMovie] = useState();
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			let post = await fetch('http://localhost:3008/blogPosts', {
				method: 'POST',
				body: JSON.stringify(movie),
				headers: {
					'Content-type': 'application/json',
				},
			});
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<Form onSubmit={submitHandler} className="container mt-5">
			<Form.Group className="title-container" controlId="formGridAddress2">
				<Form.Label>Title</Form.Label>
				<Form.Control placeholder="Title of the movie" />
			</Form.Group>

			<Form.Group className="info-container">
				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Year</Form.Label>
					<Form.Control type="Date " />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Type</Form.Label>
					<Form.Control />
				</Form.Group>
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>Poster</Form.Label>
					<Form.Control type="file" />
				</Form.Group>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
