document.addEventListener("DOMContentLoaded", function () {
    // Sample data for demonstration
    const chats = [
        { name: "Rohan Patel", message: "Hello, how r u bbro . i am inviting you to my conference", timestamp: "10:00 AM" },
        { name: "Kirtan Javeri", message: "Hi there!", timestamp: "11:30 AM" },
        { name: "Sneh Chaudhary", message: "Hey!", timestamp: "12:45 PM" },
        { name: "Rahil Shah", message: "Hey!", timestamp: "4:45 PM" },
        { name: "Sneh MAndana", message: "Hey!", timestamp: "6:35 PM" }
    ];

    // Function to display chats
    function displayChats(chatsData) {
        const chatList = document.getElementById('chat-list');
        chatList.innerHTML = '';

        chatsData.forEach(chat => {
            const chatItem = document.createElement('div');
            chatItem.classList.add('chat-item');

            const chatIcon = document.createElement('i');
            chatIcon.classList.add('chat-icon', 'fas', 'fa-user');

            const chatDetails = document.createElement('div');
            chatDetails.classList.add('chat-details');

            const chatName = document.createElement('p');
            chatName.textContent = chat.name;

            const chatMessage = document.createElement('p');
            chatMessage.textContent = chat.message;

            const timestamp = document.createElement('span');
            timestamp.classList.add('timestamp');
            timestamp.textContent = chat.timestamp;

            chatDetails.appendChild(chatName);
            chatDetails.appendChild(chatMessage);
            chatDetails.appendChild(timestamp);

            chatItem.appendChild(chatIcon);
            chatItem.appendChild(chatDetails);

            chatList.appendChild(chatItem);
        });
    }

    // Initial display of chats
    displayChats(chats);

    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.trim().toLowerCase();
        const filteredChats = chats.filter(chat => {
            return chat.name.toLowerCase().includes(searchTerm);
        });
        displayChats(filteredChats);
    });
});
