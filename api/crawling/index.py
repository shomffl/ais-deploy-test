import os
from crawling import CrawlingNews
from convert_news_data import ConvertNewsData
import datetime
import json
import glob


# ニュース記事のRSSのURL
URL = "https://www.news24.jp/rss/index.rdf"



def crawl_news_data():
    # ニュースデータのクローリング
    news_data = CrawlingNews(URL)
    news_list = news_data.crawling()

    return news_list

def convert_news_to_json(news_list):
    # 現在時刻をjsonファイルのファイル名にする
    datetime_now = datetime.datetime.now()
    formated_time = datetime_now.strftime("%Y年%m月%d日%H時%M分%S秒")
    file_name= f"news_{formated_time}"
    file_path = f"./news_files/{file_name}.json"

    # ニュースデータのjsonファイルへの変換処理
    json_data = ConvertNewsData(news_list, file_path)
    json_data.convert()



def fetch_updated_news_data_by_json(number):
    news_array = []
    sorted_files = sorted(glob.glob('news_files/*.json'), key=lambda f: os.stat(f).st_mtime, reverse=True) #最新順にリスト
    crawled_at = sorted_files[0][16:-5] #＠TODO:S3からではファイル名変わるため修正（もしくはファイル名から取る必要なさそう）
    with open(sorted_files[0], "r") as json_file:
      json_dict = json.load(json_file)
    for num in range(number):
        news = json_dict["news" + str(num)]
        # print(news)
        news_dict = {
            "title": news["title"],
            "summary": news["summary"],
            "url": news["link"],
            "crawled_at": crawled_at
        }
        # print(news_dict)
        news_array.append(news_dict)

    print(news_array)

fetch_updated_news_data_by_json(5)

# convert_news_to_json(crawl_news_data())
