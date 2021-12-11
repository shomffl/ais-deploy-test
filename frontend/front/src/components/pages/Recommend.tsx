import axios from "axios";
import { memo, VFC, useState, useEffect } from "react";

import { RecommendTitle } from "../atom/RecommendTitle";
import { Header } from "../templates/Header";
import { NewsCard } from "../templates/NewsCard";
import { News } from "../types/News";

export const Recommend: VFC = memo(() => {
  // ニュースの情報を保存しておくstateの宣言
  const [news, setNews] = useState<News[]>([]);

  // バックエンドからnewsを取得しstateに保存をする処理の記述
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("ニュースの取得を開始します。");
        console.log(res.data[0]);
      })
      .catch((error) => {
        alert(error.status);
      })
      .finally(() => {
        console.log(news);
        console.log("ニュースの取得が終了しました。");
      });
  }, news);

  return (
    <div className="w-full animate-fade-in-down h-full bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <Header
        recommendStyle="text-white"
        infoStyle="text-white"
        isTop={false}
      />
      <RecommendTitle />
      <div className="container mx-auto mt-16 flex flex-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
});
