import axios from "axios";
import { useState, useCallback } from "react";
import { ResponseType } from "../types/Response";

export const GetData = () => {
  // ニュースの情報を保存しておくstateの宣言
  const [news, setNews] = useState<Array<ResponseType>>([]);

  // axiosを叩いてloadingを管理するstatus
  const [loading, setLoading] = useState(false);

  //バックエンドからnewsを取得しstateに保存をする処理の記述;
  const getData = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<ResponseType>>(
        "https://7p3wo6bwi3.execute-api.us-east-1.amazonaws.com/news-similar-books"
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

  return { loading, news, getData };
};
