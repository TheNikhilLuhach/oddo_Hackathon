// Get item ID from URL
const params = new URLSearchParams(window.location.search);
const itemId = params.get('id');

fetch(`http://localhost:8000/items/${itemId}`)
    .then(res => res.json())
    .then(item => {
        const detail = document.getElementById('itemDetail');
        detail.innerHTML = `
            <div class="card">
                <img src="${item.image_url || 'https://via.placeholder.com/300x220?text=No+Image'}" alt="${item.name}">
                <div class="card-content">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <span class="tag">${item.size} | ${item.condition}</span>
                    <br><span class="tag">${item.category} | ${item.gender}</span>
                    <br><span class="tag">${item.status}</span>
                    <br><button onclick="startChat('${item.owner_id}')">Chat with Owner</button>
                </div>
            </div>
            <div id="ownerProfile"></div>
        `;
        // Fetch owner profile
        fetch(`http://localhost:8000/users/${item.owner_id}`)
            .then(res => res.json())
            .then(user => {
                document.getElementById('ownerProfile').innerHTML = `
                    <div class="card">
                        <h3>Owner: ${user.username}</h3>
                        <p>Karma: ${user.karma || 0}</p>
                        <p>Badges: ${(user.badges || []).join(', ')}</p>
                    </div>
                `;
            });
        // Animation hook: GSAP/Lottie can animate detail card here
    });

function startChat(ownerId) {
    // TODO: Open chat window or redirect to chat page with ownerId
    alert('Chat with user ' + ownerId);
} 