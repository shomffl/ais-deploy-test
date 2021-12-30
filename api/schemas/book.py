from typing import Optional

from pydantic import BaseModel, Field

class Book(BaseModel):
    title: str = Field(example="「日中摩擦」を検証する")
    author: str = Field(example="大石 裕")
    description: str = Field(example="今やメディアの存在と影響を無視しては語れないナショナリズム。2005年春、中国各地で大規模なデモが発生。「愛国無罪」を叫ぶ学生や市民の姿、日本製品不買の呼びかけ、日本の大使館や領事館への投石などが")
    similarity: Optional[float] = Field(example=0.552038)

    class Config:
        orm_mode = True
