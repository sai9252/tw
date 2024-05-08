const express = require('express');
const { TwitterDL: twitterAPI } = require('twitter-downloader');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/fetchMedia', async (req, res) => {
    try {
        const { url } = req.body;
        const result = await twitterAPI(url);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch media' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
