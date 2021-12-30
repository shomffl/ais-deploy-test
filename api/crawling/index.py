import os
from crawling import CrawlingNews
from convert_news_data import ConvertNewsData
import datetime
import json


# ニュース記事のRSSのURL
URL = "https://www.news24.jp/rss/index.rdf"

# ニュースデータのクローリング
news_data = CrawlingNews(URL)
news_list = news_data.crawling()

# 現在時刻をjsonファイルのファイル名にする
datetime_now = datetime.datetime.now()
formated_time = datetime_now.strftime("%Y年%m月%d日%H時%M分%S秒")
file_name= f"news_{formated_time}"
file_path = f"./news_files/{file_name}.json"

# ニュースデータのjsonファイルへの変換処理
json_data = ConvertNewsData(news_list, file_path)
json_data.convert()
