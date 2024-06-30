// Sample notifications data
const notificationsData = [
    { type: 'connection-request', user: 'John Doe', timestamp: '2 hours ago' },
    { type: 'comment', user: 'Jane Smith', timestamp: '1 day ago' },
    { type: 'like', user: 'Mike Johnson', timestamp: '3 days ago' }
];

// Function to generate notification items
function generateNotificationItem(notification) {
    const iconClasses = {
        'connection-request': 'fas fa-user-friends',
        'comment': 'fas fa-comment',
        'like': 'fas fa-thumbs-up'
    };
    return `
        <div class="notification-item">
            <div class="notification-icon">
                <i class="${iconClasses[notification.type]}"></i>
            </div>
            <div class="notification-details">
                <p><strong>${notification.user}</strong> ${notificationMessage(notification.type)}.</p>
                <p class="timestamp">${notification.timestamp}</p>
            </div>
        </div>
    `;
}

// Function to get notification message based on type
function notificationMessage(type) {
    switch (type) {
        case 'connection-request':
            return 'sent you a connection request';
        case 'comment':
            return 'commented on your post';
        case 'like':
            return 'liked your post';
        default:
            return '';
    }
}

// Function to render notifications
function renderNotifications() {
    const notificationList = document.getElementById('notification-list');
    const notificationsHTML = notificationsData.map(notification => generateNotificationItem(notification)).join('');
    notificationList.innerHTML = notificationsHTML;
}

// Update notification count in the badge
function updateNotificationCount() {
    const notificationCount = document.getElementById('notification-count');
    notificationCount.textContent = notificationsData.length;
}

// Initial rendering
renderNotifications();
updateNotificationCount();
