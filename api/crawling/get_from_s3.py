from pathlib import Path

import io
import json
from boto3.session import Session
from api.utils.text import replaceTextFromNewsText, convert_full_width_to_half_width


import api.settings as settings

session = Session(
    aws_access_key_id = settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key = settings.AWS_SECRET_ACCESS_KEY_ID,   
)
s3_bucket = "crawling-news-bucket"

# @TODO:全体的に関数分けてリファクタしたい
def fetch_updated_news_data_from_s3(limit):
    s3 = session.resource("s3")
    bucket = s3.Bucket(s3_bucket)

    # ファイルリストオブジェクトを作成
    objs = bucket.meta.client.list_objects_v2(
        Bucket=bucket.name
    )
    # ディレクトリ配下のファイルについてLOOP処理
    loop_first_f = True
    for o in objs.get('Contents'):
        # LOOP初回処理
        if loop_first_f:
            download_target_file = o.get('Key')
            modified_datetime_mid = o.get('LastModified')
            loop_first_f = False
        # 2回目以降
        else:
            # 最新更新日時のファイルにターゲットを移動する
            if modified_datetime_mid <= o.get('LastModified'):
                modified_datetime_mid = o.get('LastModified')
                download_target_file = o.get('Key')

    try:
        # S3からファイルのbodyを取得
        obj = bucket.Object(download_target_file)
        body = obj.get()['Body'].read()
        news_data =json.loads(body.decode('utf-8'))
        print(f'download {download_target_file} is completed.')

        crawled_at = download_target_file[:-5]
        result = convert_news_to_correct_schema(news_data, limit, crawled_at)

        return result

    except Exception:
        print(f'download {download_target_file} is failed.')


def convert_news_to_correct_schema(news_data, limit, crawled_at):
    news_array = []

    for num in range(limit):
        news = news_data["news" + str(num)]
        news_dict = {
            "title": replaceTextFromNewsText(news["title"]),
            "summary": convert_full_width_to_half_width(news["summary"]),
            "url": news["link"],
            "crawled_at": crawled_at,
        }
        news_array.append(news_dict)

    return news_array
