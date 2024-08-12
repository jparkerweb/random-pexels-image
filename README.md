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
    git clone https://github.com/jparkerweb/pexels-image-search-api.git
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
```

---

## 💎 Obsidian Script
An additional specific use case is for using a random image to be used as a souce for the `Custom Background Image` script in Obsidian:
- Custom Background Image script: [here](https://github.com/jparkerweb/obsidian-custom-banner-image)
- Script to generate the field used by Custom Background Image: [here](https://github.com/jparkerweb/random-pexels-image/blob/master/.obsidian/scripts/obsidian-random-pexels-image.js)

### Usage
- make sure you have `dataviewjs` plugin installed in Obsidian
- place both scripts in a scripts folder in your Obsidian vault (I use a folder called `= scripts`)
- reference the [Custom Background Image github docs](https://github.com/jparkerweb/obsidian-custom-banner-image) to ensure you are including the correct `frontmatter` in your note
- gather your [pexels.com](https://www.pexels.com/) API key (its free to signup and use)
- update the `obsidian-random-pexels-image.js` file with your API key (you will see a variable called `apiKeyToUse` in the top of the file
- call the pexels script in your note right after your frontmatter
  - example: `$= await dv.view("= scripts/obsidian-random-pexels-image", "<keyword or two to search images with here>")`

