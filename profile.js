// TODO: Replace with actual user ID from auth
const userId = localStorage.getItem('userId') || 'demoUserId';

fetch(`http://localhost:8000/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        const section = document.getElementById('profileSection');
        section.innerHTML = `
            <div class="card">
                <h2>${user.username}</h2>
                <p>Email: ${user.email}</p>
                <p>Karma: ${user.karma || 0}</p>
                <p>Badges: ${(user.badges || []).join(', ')}</p>
                <form id="editProfileForm">
                    <input type="text" name="username" value="${user.username}" required><br>
                    <input type="text" name="bio" value="${user.bio || ''}" placeholder="Bio"><br>
                    <input type="text" name="avatar_url" value="${user.avatar_url || ''}" placeholder="Avatar URL"><br>
                    <button type="submit">Update Profile</button>
                </form>
            </div>
        `;
        // Animation hook: GSAP/Lottie can animate profile card here
        document.getElementById('editProfileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            fetch(`http://localhost:8000/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(resp => {
                alert('Profile updated!');
                location.reload();
            });
        });
    }); 