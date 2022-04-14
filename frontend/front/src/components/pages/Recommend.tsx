import { memo, VFC, useEffect } from "react";

import { RecommendTitle } from "../atom/RecommendTitle";
import { Header } from "../templates/Header";
import { NewsCard } from "../templates/NewsCard";
import { GetData } from "../hooks/GetData";
import { LoadingContent } from "../atom/LoadingContent";

export const Recommend: VFC = memo(() => {
  // news&booksのデータの取得のhooksの展開
  const { loading, news, getData } = GetData();

  // axiosを使ってAPIからデータを取得しているため、useEffectで再レンダリングがかからないようにする
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContent />
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
              <span key={num} className="mb-7">
                <NewsCard response={res} />
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
});
