import axios from "axios";
import { memo, VFC, useState, useEffect } from "react";

import { RecommendTitle } from "../atom/RecommendTitle";
import { Header } from "../templates/Header";
import { NewsCard } from "../templates/NewsCard";

import { ResponseType } from "../types/Response";

export const Recommend: VFC = memo(() => {
  // ニュースの情報を保存しておくstateの宣言
  const [news, setNews] = useState<Array<ResponseType>>([]);

  // axiosを叩いてloadingを管理するstatus
  const [loading, setLoading] = useState(false);

  //バックエンドからnewsを取得しstateに保存をする処理の記述;
  useEffect(() => {
    setLoading(true);
    axios
      .get<Array<ResponseType>>(
        "https://a7d46inwo2.execute-api.us-east-1.amazonaws.com/news-similar-books"
      )

      .then((res) => {
        console.log("ニュースの取得を開始します。↓");
        console.log(res.data);
        setNews(res.data);
      })
      .catch((error) => {
        console.log(error.status);
      })
      .finally(() => {
        console.log(news);
        console.log("ニュースの取得が終了しました。");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(news);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black">
          <div className="pt-40 text-center animate-ping text-white text-size-lg">
            loading...
          </div>
        </div>
      ) : (
        <div className="w-full animate-fade-in-down h-full bg-gradient-to-br from-gray-700 via-gray-900 to-black">
          <Header
            recommendStyle="text-white"
            infoStyle="text-white"
            isTop={false}
          />
          <RecommendTitle />
          <div className="container mx-auto mt-16 flex flex-wrap">
            {news.map((res, num) => (
              // この中に繰り返し処理を記述する
              <span key={num}>
                <NewsCard response={res} />
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
});
