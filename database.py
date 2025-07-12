from motor.motor_asyncio import AsyncIOMotorClient
import config

# MongoDB connection
client = AsyncIOMotorClient(config.MONGODB_URI)  # <-- Uses MongoDB URI from config

db = client["rewear_db"]  # Database name 