import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from mangum import Mangum


from api.routers import book
from api.routers import news_book


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(book.router)
app.include_router(news_book.router)

# handler = Mangum(app)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=80)
