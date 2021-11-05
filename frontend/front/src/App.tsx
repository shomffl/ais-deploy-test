import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./Button";
import axios from "axios";
import { stringify } from "querystring";

function App() {
  // Titileのstate管理
  const [title, setTitle] = useState<string>("");
  // Autherのstate管理
  const [auther, setAuther] = useState<string>("");

  // 全ての本詳細を管理するstate
  const [books, setBooks] = useState([]);

  // responseの型定義
  type Books = [
    {
      id: number;
      book_collection_number: string;
      book_unique_number: string;
      title: string;
      author: string;
      publisher: string;
      created_at: string;
      updated_at: string;
    },
  ];

  // 全ての本の情報を取得
  useEffect(() => {
    axios.get<Books>("http://localhost:8000/books").then((response) => {
      console.log(response);
      console.log("処理をとおりました");
    });
  }, []);

  const titleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const autherChange = (e: any) => {
    setAuther(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/books", {
        id: 1,
        book_collection_number: "所蔵番号",
        book_unique_number: "書誌番号",
        title: "タイトル",
        author: "著者",
        publisher: "出版社",
        created_at: "2021-11-05T12:54:04.582Z",
        updated_at: "2021-11-05T12:54:04.582Z",
      })
      .catch((error) => {
        console.log("通信失敗");
        console.log(error.status);
      })
      .then((response) => {
        console.log(response);
        console.log("/booksに対してpostが働きました");
        setTitle("");
        setAuther("");
      });
  };

  return (
    <div className="App">
      <form className="grid grid-cols-1 gap-6 m-16" onSubmit={handleSubmit}>
        {/* Title */}
        <label className="text-left ml-4">Book Title</label>
        <input
          className="mt-1 block w-4/5 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="place your ideas?"
          onChange={titleChange}
          value={title}
        />
        {/* auther */}
        <label className="text-left ml-4">Book Auther</label>
        <input
          className="mt-1 block w-4/5 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="place your ideas?"
          onChange={autherChange}
          value={auther}
        />
        {/* 本の識別番号(book_unique_number) */}

        <Button>submit</Button>
      </form>
    </div>
  );
}

export default App;
