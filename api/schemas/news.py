from typing import Optional

from pydantic import BaseModel, Field

class News(BaseModel):
    title: str = Field(example="「日中摩擦」を検証する")
    summary: str = Field(example="大石 裕")
    url: str = Field(example="今やメディアの存在と影響を無視しては語れないナショナリズム。2005年春、中国各地で大規模なデモが発生。「愛国無罪」を叫ぶ学生や市民の姿、日本製品不買の呼びかけ、日本の大使館や領事館への投石などが")
    crawled_at: Optional[str] = Field(example="2021年12月30日11時53分33秒")

    class Config:
        orm_mode = True
