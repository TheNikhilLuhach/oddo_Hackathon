// Image preview
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Form submission
const uploadForm = document.getElementById('uploadForm');
uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    fetch('http://localhost:8000/items/upload', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        alert('Upload successful!');
        window.location.href = 'index.html';
    })
    .catch(err => {
        alert('Upload failed.');
        console.error(err);
    });
});
// TODO: Add authentication and Cloudinary integration if uploading directly from frontend 