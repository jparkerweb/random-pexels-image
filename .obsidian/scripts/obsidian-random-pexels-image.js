const apiKeyToUse = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const sizeToUse = 'medium';
const orientationToUse = 'landscape';
const keyword = input; // 'input' will be passed by dataview

const fetchImage = async () => {
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${keyword}&per_page=10&size=${sizeToUse}&orientation=${orientationToUse}`, {
            headers: {
                Authorization: apiKeyToUse
            }
        });

        const data = await response.json();

        if (data.photos && data.photos.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.photos.length);
            const imageUrl = data.photos[randomIndex].src.original;

            // Create the div element but keep it hidden
            const div = dv.el("div", null, {
                cls: "custom-banner-image",
                attr: { style: `background-image:url('${imageUrl}'); display:none;` }
            });

            // Wait for the image to load
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
                // Show the div once the image is loaded
                div.style.display = 'block';
            };
        } else {
            dv.el("div", "No images found", { cls: "custom-banner-image" });
        }
    } catch (error) {
        console.error('Error fetching image from Pexels API:', error);
        dv.el("div", "Error fetching image", { cls: "custom-banner-image" });
    }
};

fetchImage();
