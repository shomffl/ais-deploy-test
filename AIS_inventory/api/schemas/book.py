from typing import Optional
from datetime import datetime

from fastapi import FastAPI
from pydantic import BaseModel, Field

class Book(BaseModel):
    id: int = Field(example=1)
    book_collection_number: str = Field(example="所蔵番号")
    book_unique_number: str = Field(example="書誌番号")
    title: str = Field(example="タイトル")
    author: str = Field(example="著者")
    publisher: str = Field(example="出版社")
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True
