for (let i = 1; i <= 8; i++) {
    const button = document.getElementById(`btn${i}`)
    button.addEventListener('click', getRandomCatGif)
}

function getRandomCatGif() {
    fetch("https://api.thecatapi.com/v1/images/search?mime_types=gif")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const docBody = document.body
            docBody.innerHTML = `<h1 class="common">Thanks for shopping with us.</h1>
                                <img src="${data[0].url}" alt="Cat GIF" id="cat-gif" class="common">
                                <h2>We will get back to you in 8 business years</h2>`;
        })
        .catch(function(error) {
            console.error("Failed to fetch cat gif:", error);
        });
}
