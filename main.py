from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth_router, items_router, users_router, chat_router, admin_router
import config

app = FastAPI(title="Rewear – Community Clothing Exchange")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_router)
app.include_router(items_router)
app.include_router(users_router)
app.include_router(chat_router)
app.include_router(admin_router)

@app.get("/")
def root():
    return {"message": "Welcome to Rewear – Community Clothing Exchange API"} 