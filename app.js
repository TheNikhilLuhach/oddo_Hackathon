// Fetch and render clothing items
// TODO: Replace with actual API endpoint
fetch('http://localhost:8000/items')
    .then(res => res.json())
    .then(items => {
        const grid = document.getElementById('itemsGrid');
        grid.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.image_url || 'https://via.placeholder.com/300x220?text=No+Image'}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="tag">${item.size} | ${item.condition}</span>
                    <br><span class="tag">${item.category} | ${item.gender}</span>
                    <br><a href="detail.html?id=${item._id}">View Details</a>
                </div>
            `;
            // Animation hook: GSAP/Lottie can animate card appearance here
            grid.appendChild(card);
        });
    });
// TODO: Add filtering, animation, and dynamic updates 