// Fetch and render users
fetch('http://localhost:8000/admin/users')
    .then(res => res.json())
    .then(users => {
        const usersDiv = document.getElementById('adminUsers');
        usersDiv.innerHTML = '';
        users.forEach(user => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `
                <h4>${user.username} (${user.email})</h4>
                <button onclick="deleteUser('${user._id}')">Delete</button>
            `;
            usersDiv.appendChild(div);
        });
    });

// Fetch and render items
fetch('http://localhost:8000/admin/items')
    .then(res => res.json())
    .then(items => {
        const itemsDiv = document.getElementById('adminItems');
        itemsDiv.innerHTML = '';
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `
                <h4>${item.name}</h4>
                <button onclick="deleteItem('${item._id}')">Delete</button>
            `;
            itemsDiv.appendChild(div);
        });
    });

function deleteUser(userId) {
    fetch(`http://localhost:8000/admin/users/${userId}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(resp => {
            alert('User deleted!');
            location.reload();
        });
}
function deleteItem(itemId) {
    fetch(`http://localhost:8000/admin/items/${itemId}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(resp => {
            alert('Item deleted!');
            location.reload();
        });
}
// TODO: Add admin authentication and animation 