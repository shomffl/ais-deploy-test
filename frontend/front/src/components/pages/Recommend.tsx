import axios from "axios";
import { memo, VFC, useState, useEffect } from "react";

import { RecommendTitle } from "../atom/RecommendTitle";
import { Header } from "../templates/Header";
import { NewsCard } from "../templates/NewsCard";
import { BookType } from "../types/Book";

export const Recommend: VFC = memo(() => {
  // ニュースの情報を保存しておくstateの宣言
  const [news, setNews] = useState<Array<BookType>>([]);

  // バックエンドからnewsを取得しstateに保存をする処理の記述
  // useEffect(() => {
  //   axios
  //     .get<Array<Book>>("http://localhost:8000/books")
  //     .then((res) => {
  //       console.log("ニュースの取得を開始します。↓");
  //       console.log(res.data);
  //       setNews(res.data);
  //     })
  //     .catch((error) => {
  //       alert(error.status);
  //     })
  //     .finally(() => {
  //       console.log(news);
  //       console.log("ニュースの取得が終了しました。");
  //     });
  // }, news);

  const response = [
    {
      news: {
        title: "消される、天安門事件の「記憶」香港の大学、親中派が圧力",
        summary:
          "消される天安門事件の記憶。香港の大学、親中派が圧力。香港の大学で、民主化を求める学生らが北京で武力弾圧された1989年の天安門事件",
        url: "url",
        crawled_at: "2021年12月30日11時53分33秒",
      },
      book: {
        title: "「日中摩擦」を検証する",
        author: "大石 裕",
        description:
          "今やメディアの存在と影響を無視しては語れないナショナリズム。2005年春、中国各地で大規模なデモが発生。「愛国無罪」を叫ぶ学生や市民の姿、日本製品不買の呼びかけ、日本の大使館や領事館への投石などが",
        similarity: 0.552038,
      },
    },
    {
      news: {
        title: "消される、天安門事件の「記憶」香港の大学、親中派が圧力",
        summary:
          "消される天安門事件の記憶。香港の大学、親中派が圧力。香港の大学で、民主化を求める学生らが北京で武力弾圧された1989年の天安門事件",
        url: "url",
        crawled_at: "2021年12月30日11時53分33秒",
      },
      book: {
        title: "「日中摩擦」を検証する",
        author: "大石 裕",
        description:
          "今やメディアの存在と影響を無視しては語れないナショナリズム。2005年春、中国各地で大規模なデモが発生。「愛国無罪」を叫ぶ学生や市民の姿、日本製品不買の呼びかけ、日本の大使館や領事館への投石などが",
        similarity: 0.552038,
      },
    },
  ];

  useEffect(() => {
    console.log(news);
  });
  return (
    <div className="w-full animate-fade-in-down h-full bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <Header
        recommendStyle="text-white"
        infoStyle="text-white"
        isTop={false}
      />
      <RecommendTitle />
      <div className="container mx-auto mt-16 flex flex-wrap">
        {response.map((res, num) => (
          // この中に繰り返し処理を記述する
          <>
            <NewsCard key={num} response={res} />
          </>
        ))}
      </div>
    </div>
  );
});
