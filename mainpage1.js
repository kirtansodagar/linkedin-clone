// Get reference to the search form and search input
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Add event listener to the form submission event
searchForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the search query from the input field
    const searchQuery = searchInput.value.trim();

    // Perform the search functionality (e.g., display search results, make API request, etc.)
    // For demonstration, let's just log the search query to the console
    console.log('Search Query:', searchQuery);

    // Clear the search input field after search
    searchInput.value = '';
});
function uploadPhoto() {
    // Trigger the file input element
    document.getElementById("photoInput").click();
}

// Function to handle photo upload
document.getElementById("photoInput").addEventListener("change", function(event) {
    var file = event.target.files[0];
    // Check if a file was selected
    if (file) {
        // Check if the file is an image
        if (file.type.match('image.*')) {
            // Create a FileReader object
            var reader = new FileReader();
            // Define the onload event handler
            reader.onload = function(e) {
                // Get the data URL of the uploaded image
                var imageDataUrl = e.target.result;
                // You can use the data URL to display the image on the page or send it to the server
                console.log("Image uploaded:", imageDataUrl);
            };
            // Read the file as a data URL
            reader.readAsDataURL(file);
        } else {
            // Display an error message if the file is not an image
            alert("Please select an image file.");
        }
    } else {
        // Display an error message if no file was selected
        alert("Please select an image file.");
    }
});


// Function to handle video upload
function uploadVideo() {
    document.getElementById("videoInput").click();
}

// Function to handle event upload
function uploadEvent() {
    document.getElementById("eventInput").click();
}

// Function to handle writing an article
function writeArticle() {
    // Add your custom logic here for writing an article
}

// Event listener for file input change (Video)
document.getElementById("videoInput").addEventListener("change", function () {
    var file = this.files[0];
    if (file) {
        // Handle the uploaded video file here
        console.log("Video file uploaded:", file);
    }
});

// Event listener for file input change (Event)
document.getElementById("eventInput").addEventListener("change", function () {
    var file = this.files[0];
    if (file) {
        // Handle the uploaded event file here
        console.log("Event file uploaded:", file);
    }
});

function writeArticle() {
    // Simulate opening a text editor for writing an article
    var articleEditor = window.open("", "_blank");
    articleEditor.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Article Editor</title>
        </head>
        <body>
            <h1>Article Editor</h1>
            <textarea id="articleContent" rows="10" cols="50"></textarea><br>
            <button onclick="saveArticle()">Save Article</button>
            <script>
                function saveArticle() {
                    var articleContent = document.getElementById("articleContent").value;
                    // Here you can implement the logic to save the article content, e.g., send it to the server
                    console.log("Article content saved:", articleContent);
                    // Close the editor window after saving
                    window.close();
                }
            </script>
        </body>
        </html>
    `);
}
