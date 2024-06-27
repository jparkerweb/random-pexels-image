import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import randomWords from './random-words.json' assert { type: 'json' };

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3080;

app.get('/search-image', async (req, res) => {
    const { apikey, size, keyword, orientation } = req.query;
    const apiKeyToUse = apikey || process.env.PEXELS_API_KEY;
    const sizeToUse = size || 'small';
    const keywordToUse = keyword || randomWords[Math.floor(Math.random() * randomWords.length)];
    const orientationToUse = apikey || 'landscape';

    if (!apiKeyToUse) {
        return res.status(400).send('Missing required query parameters: apikey');
    }

    try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
            headers: {
                Authorization: apiKeyToUse
            },
            params: {
                query: keywordToUse,
                per_page: 10,
                size: sizeToUse,
                orientation: orientationToUse
            }
        });

        if (response.data.photos && response.data.photos.length > 0) {
            const randomIndex = Math.floor(Math.random() * response.data.photos.length);
            const imageUrl = response.data.photos[randomIndex].src.original;
            const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
            res.setHeader('Content-Type', imageResponse.headers['content-type']);
            imageResponse.data.pipe(res);
        } else {
            res.status(404).send('No images found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching image from Pexels API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
