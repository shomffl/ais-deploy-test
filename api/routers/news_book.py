from typing import Any, List
from fastapi import APIRouter, Depends
from datetime import datetime


import api.schemas.news_book as schemas_news_book



router = APIRouter()

@router.get("/news-similar-books", response_model=List[schemas_news_book.NewsSimilarBook])
def get_books():
    # newsと、それに関連する本を10個返す
    return List[schemas_news_book.NewsSimilarBook]