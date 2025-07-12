// TODO: Replace with actual user ID from auth
const userId = localStorage.getItem('userId') || 'demoUserId';
const ws = new WebSocket(`ws://localhost:8000/chat/ws/${userId}`);
const chatWindow = document.getElementById('chatWindow');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

ws.onmessage = function(event) {
    const msg = document.createElement('div');
    msg.textContent = event.data;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    // Animation hook: animate new message
};

chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    ws.send(chatInput.value);
    chatInput.value = '';
});
// TODO: Add user-to-user context, message history, and animation 