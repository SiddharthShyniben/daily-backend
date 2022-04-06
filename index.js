import express from 'express';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/callback', async (req, res) => {
	const {code} = req.query;

	const login = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			client_id: process.env.CLIENT_ID,
			client_secret: process.env.CLIENT_SECRET,
			code,
		}),
	}).then(res => res.json());

	const accessToken = login.access_token;
	res.send(accessToken)
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
