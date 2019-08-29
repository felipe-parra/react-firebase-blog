import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getFirebase } from '../firebase';

const labelStyles = {
	display: 'block',
	marginBottom: 4
};

const inputStyles = {
	width: '100%',
	height: '2rem',
	lineHeight: '2rem',
	verticalAlign: '1rem',
	fontSize: '1rem',
	marginBottom: '1.5rem',
	padding: '0 0.25rem'
};

const Create = () => {
	const [ title, setTitle ] = useState('');
	const [ slug, setSlug ] = useState('');
	const [ coverImage, setCoverImage ] = useState('');
	const [ coverImageAlt, setCoverImageAlt ] = useState('');
	const [ content, setContent ] = useState('');

	const createPost = () => {
		// console.log({ title, slug, coverImage, coverImageAlt, content });
		const date = generateDate();
		const newPost = { title, date, slug, coverImage, coverImageAlt, content };
		getFirebase().database().ref().child(`posts/${slug}`).set(newPost).then(() => <Redirect to="/" push />);
	};
	const generateDate = () => {
		const now = new Date();
		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		return now.toLocaleDateString('en-US', options);
	};

	return (
		<div>
			<h1>Create a new Post</h1>
			<section style={{ margin: '2rem 0' }}>
				<label style={labelStyles} htmlFor="title-field">
					Title
				</label>
				<input
					style={inputStyles}
					type="text"
					id="title-field"
					value={title}
					onChange={({ target: { value } }) => {
						setTitle(value);
					}}
				/>
				<label style={labelStyles} htmlFor="slug-field">
					Slug
				</label>
				<input
					style={inputStyles}
					type="text"
					id="slug-field"
					value={slug}
					onChange={({ target: { value } }) => {
						setSlug(value);
					}}
				/>
				<label style={labelStyles} htmlFor="cover-image-field">
					Cover Image
				</label>
				<input
					style={inputStyles}
					type="text"
					id="cover-image-field"
					value={coverImage}
					onChange={({ target: { value } }) => {
						setCoverImage(value);
					}}
				/>
				<label style={labelStyles} htmlFor="cover-image-alt-field">
					Cover Image Alt
				</label>
				<input
					style={inputStyles}
					type="text"
					id="cover-image-alt-field"
					value={coverImageAlt}
					onChange={({ target: { value } }) => {
						setCoverImageAlt(value);
					}}
				/>

				<label style={labelStyles} htmlFor="content-fiel">
					Content
				</label>
				<input
					style={{ ...inputStyles, height: 200, verticalAlign: 'top' }}
					type="text"
					id={content}
					value={content}
					onChange={({ target: { value } }) => {
						setContent(value);
					}}
				/>
				<div style={{ textAlign: 'right' }}>
					<button
						style={{
							boder: 'none',
							color: '#fff',
							backgroundColor: '#039be5',
							borderRadius: '4px',
							padding: '8px 12px',
							fontSize: '0.9rem'
						}}
						onClick={createPost}
					>
						Create
					</button>
				</div>
			</section>
		</div>
	);
};
export default Create;
