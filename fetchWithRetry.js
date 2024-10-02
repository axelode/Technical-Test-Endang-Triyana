async function fetchWithRetry(url, options = {}, retries = 3, backoff = 1000) {
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response;
        } catch (error) {
            if (attempt < retries) {
                const waitTime = backoff * Math.pow(2, attempt);
                console.log(`Percobaan ${attempt + 1} gagal. Menunggu ${waitTime}ms sebelum mencoba lagi...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
            } else {
                throw error;
            }
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts", {}, 3, 1000)
    .then(response => response.json())
    .then(data => console.log("Data yang diambil:", data))
    .catch(error => console.error("Request gagal setelah beberapa percobaan:", error));
