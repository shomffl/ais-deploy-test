# .env ファイルをロードして環境変数へ反映
from dotenv import load_dotenv
load_dotenv()
# 環境変数を参照
import os

ACCESS_KEY_ID = os.getenv("ACCESS_KEY_ID")
SECRET_ACCESS_KEY_ID = os.getenv("SECRET_ACCESS_KEY_ID")
