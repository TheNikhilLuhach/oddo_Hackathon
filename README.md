# Rewear – Community Clothing Exchange

## Overview
A full-stack web app for eco-friendly community clothing exchange. Users can upload, browse, filter, and swap/donate/sell garments, with real-time chat and gamified karma/badges.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript (GSAP/Lottie for animations)
- **Backend:** FastAPI (Python)
- **Database:** MongoDB Atlas
- **Image Upload:** Cloudinary
- **Auth:** JWT-based
- **Realtime Chat:** Flask-SocketIO or FastAPI alternative

## Features
- Animated grid home page of clothing items
- Upload garments with image preview, size, condition, category
- Filter by size, gender, type, distance (geo-location)
- Item detail page with user profile, condition, swap/donate/sell
- Realtime chat between users
- Karma points and badges
- Admin panel for user/item management

## Setup
- Add your MongoDB Atlas URI in `backend/config.py`  # <-- Add your MongoDB URI here
- Add your Cloudinary credentials in `backend/config.py`  # <-- Add your Cloudinary API key/secret here
- Add your JWT secret in `backend/config.py`  # <-- Add your JWT secret here
- Add your WebSocket secret/config in `backend/config.py`  # <-- Add your WebSocket secret here

## Deployment
- Backend: Render/Heroku
- DB: MongoDB Atlas
- Images: Cloudinary

---

> **Note:** All API keys, secrets, and sensitive configs are marked with comments in the codebase. Replace them with your actual credentials. 

Your project **Rewear – Community Clothing Exchange** is scaffolded with a modular, clean, and well-commented structure for both backend (FastAPI, MongoDB, JWT, Cloudinary, WebSocket) and frontend (HTML, CSS, JS, eco-friendly, responsive, animation-ready). 

**Sensitive config locations** (API keys, secrets, URIs) are clearly marked with comments in `backend/config.py` and in the README.  
All frontend and backend modules have starter templates and comments for where to add further logic, animation, and authentication.

### ✅ What’s ready:
- **Backend:** Modular FastAPI app with routers for auth, items, users, chat, and admin. MongoDB and Cloudinary integration points are commented. JWT and WebSocket utilities are in place.
- **Frontend:** Modern, eco-themed HTML/CSS/JS for all main pages (Home, Upload, Detail, Profile, Chat, Admin). Animation and dynamic hooks are commented for GSAP/Lottie.
- **Admin & User Flows:** Admin panel, user profile, upload, and chat templates are ready for further logic.
- **Comments:** All places where you need to add API keys, secrets, or sensitive info are marked with comments like `# <-- Add your ... here`.

---

**Next steps for you:**
- Add your MongoDB Atlas URI, Cloudinary credentials, JWT secret, and WebSocket secret in `backend/config.py`.
- Install backend dependencies:  
  ```bash
  cd hacahon_oddo/backend
  pip install -r requirements.txt
  ```
- Run the backend:  
  ```bash
  python -m __main__
  ```
- Open `frontend/index.html` in your browser to start with the UI.

---

