# Inventory_inspection_application


## ローカル環境開発のセットアップ 

１，docker 及び docker-compose のインストール

https://docs.docker.jp/compose/install.html

２，docker でのビルド、コンテナー立ち上げ

```
$ docker-compose build

$ docker-compose up
...
start Uvicorn running on http://0.0.0.0:8000...
```


３, API仕様書を確認。こちらを元にフロントエンド開発。

http://localhost:8000/docs#/



４， (optional)DBのマイグレーション
```
$ docker-compose exec app poetry run python -m api.migrate_db
```





