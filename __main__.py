import uvicorn

if __name__ == "__main__":
    # Run FastAPI app for local development
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)  # Adjust host/port as needed 