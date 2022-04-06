import express from 'express';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 5000;
const app = express();

process.exit(1)

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
