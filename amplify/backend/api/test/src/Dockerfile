# python3.9のイメージをダウンロード
FROM python:3.9
ENV PYTHONUNBUFFERED=1


# mecabの導入
# @see: https://github.com/spider-man-tm/docker-python-mecab-neologd-base/blob/main/Dockerfile
RUN apt-get -y update && \
  apt-get -y upgrade && \
  apt-get install -y mecab && \
  apt-get install -y libmecab-dev && \
  apt-get install -y mecab-ipadic-utf8 && \
  apt-get install -y git && \
  apt-get install -y make && \
  apt-get install -y curl && \
  apt-get install -y xz-utils && \
  apt-get install -y file && \
  apt-get install -y sudo

# mecab-ipadic-NEologdのインストール
RUN git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git && \
  cd mecab-ipadic-neologd && \
  ./bin/install-mecab-ipadic-neologd -n -y && \
  echo dicdir = `mecab-config --dicdir`"/mecab-ipadic-neologd">/etc/mecabrc && \
  sudo cp /etc/mecabrc /usr/local/etc && \
  cd

# pipを使ってpoetryをインストール＆アップデート
RUN pip install -U poetry

# poetryの定義ファイルをコピー (存在する場合)
COPY pyproject.toml* poetry.lock* ./

# poetryでライブラリをインストール (pyproject.tomlが既にある場合)
RUN poetry config virtualenvs.in-project false
RUN if [ -f pyproject.toml ]; then poetry install; fi


COPY ./api /api
ENV PYTHONPATH=/api
ENV ACCESS_KEY_ID=${ACCESS_KEY_ID}
ENV SECRET_ACCESS_KEY_ID=${SECRET_ACCESS_KEY_ID}

# uvicornのサーバーを立ち上げる
CMD ["poetry", "run", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "80"]

EXPOSE 80
