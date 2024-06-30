// Sample connects data
const connectsData = [
    { name: 'Rohan Patel', position: 'Software Engineer' },
    { name: 'Kirtan Javeri', position: 'Product Manager' },
    { name: 'Sneh Chaudhary', position: 'Data Analyst' }
];

// Function to generate connect items
function generateConnectItem(connect) {
    return `
        <div class="connect-item">
            <div class="connect-icon">
                <i class="fas fa-user"></i>
            </div>
            <div class="connect-details">
                <p><strong>${connect.name}</strong></p>
                <p>${connect.position}</p>
            </div>
        </div>
    `;
}

// Function to render connects
function renderConnects() {
    const connectList = document.getElementById('connects-list');
    const connectsHTML = connectsData.map(connect => generateConnectItem(connect)).join('');
    connectList.innerHTML = connectsHTML;
}

// Initial rendering
renderConnects();
