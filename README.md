# 🎰 Random Pexels Image

Simple Node.js application that provides an endpoint to search Pexels and return a randomly selected image. It allows hotlinking images by directly returning the image data.

## Use Case

This API is designed to fetch images from the Pexels API based on specified query parameters such as size, keyword, and orientation. If no keyword is provided, a random keyword from a list of 300 random words is used. This API can be useful for web applications or services that need to dynamically fetch and display images from Pexels without storing them locally.

## Prerequisites

- Node.js installed on your machine
- Pexels API key (You can get it by signing up on [Pexels](https://www.pexels.com/api/))

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/your-username/pexels-image-search-api.git
    cd pexels-image-search-api
    ```

2. Install the dependencies
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Pexels API key and server port
    ```plaintext
    PEXELS_API_KEY=your_pexels_api_key
	PORT=8000
    ```

4. Optionally adjust the `random-words.json` file with random words if a keyword is not submited with each search request

## Usage

1. Start the server
    ```bash
    npm start
    ```

2. Make a GET request to the `/search-image` endpoint with the following query parameters:
    - `apikey` (optional): Your Pexels API key. If not provided, the key from the `.env` file will be used.
    - `size` (optional): The size of the image (e.g., `large`, `medium`, `small`). Defaults to `small`.
    - `keyword` (optional): The search keyword. If not provided, a random keyword will be selected from the `random-words.json` array.
    - `orientation` (optional): The orientation of the image (e.g., `landscape`, `portrait`, `square`). Defaults to `landscape`.

### Example Requests

```plaintext
http://localhost:8000/search-image?size=medium&keyword=beach&orientation=landscape&apikey=YOUR_PEXELS_API_KEY
http://localhost:8000/search-image?keyword=bugs
http://localhost:8000/search-image