import React, { useState, useEffect } from "react";
import "./App.css";
import { Button } from "./Button";
import axios from "axios";

function App() {
  // 新規投稿のstate管理
  const [post, setPost] = useState<string>("");
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

  const formChange = (e: any) => {
    setPost(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(post);
    setPost("");
  };

  return (
    <div className="App">
      <form className="grid grid-cols-1 gap-6 m-16" onSubmit={handleSubmit}>
        <input
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="What needs to be done?"
          onChange={formChange}
          value={post}
        />
        <Button>submit</Button>
      </form>
    </div>
  );
}

export default App;
