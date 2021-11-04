import React, { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import axios from "axios";

function App() {
  // 新規投稿のstate管理
  const [post, setPost] = useState<string>("");
  // 全ての本詳細を管理するstate
  const [books, setBooks] = useState([]);

  // 全ての本の情報を取得
  axios.get("http://localhost:8000/books").then((response) => {
    console.log(response);
    console.log("処理をとおりました");
  });

  const handleSubmit = () => {
    console.log("handleSubmitが押されました。");
  };

  return (
    <div className="App">
      <form className="grid grid-cols-1 gap-6 m-16" onSubmit={handleSubmit}>
        <input
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="What needs to be done?"
          // onSubmit={(e: React.KeyboardEvent<HTMLInputElement>) => setPost(e)}
        />
        <Button>submit</Button>
      </form>
    </div>
  );
}

export default App;
