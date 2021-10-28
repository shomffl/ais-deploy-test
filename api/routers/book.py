from typing import Any, List
from fastapi import APIRouter, Depends

import api.schemas.book as schemas_book



router = APIRouter()

@router.get("/books", response_model=List[schemas_book.Book])
def get_books():
    # 書籍一覧取得
    pass

@router.post("/books", response_model=schemas_book.Book)
def create_book():
    # 書籍作成
    pass

@router.get("/books/{book_id}", response_model=schemas_book.Book)
def show_book(book_id):
    # 書籍詳細
    pass

@router.put("/books/{book_id}", response_model=schemas_book.Book)
def update_book(book_id):
    # 書籍更新
    pass

@router.delete("/books/{book_id}", response_model=schemas_book.Book)
def delete_book(book_id):
    # 書籍削除
    pass




# @router.post("/books", response_model=)