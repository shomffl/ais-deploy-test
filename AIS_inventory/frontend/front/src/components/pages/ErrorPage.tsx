import { memo, VFC } from "react";

import Image from "../Image/404.png";

export const ErrorPage: VFC = memo(() => {
  return (
    <div className=" h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 w-full">
      <div className="flex pt-32">
        {/* <div className="text-center">4</div> */}
        <img src={Image} alt="404image" className="mx-auto animate-bounce" />
        {/* <div className="">4</div> */}
      </div>
      <p className="font-bold text-center text-4xl text-gray-400 pt-10 animate-bounce">
        ここは404ページが表示されるページになっておりますよ
      </p>

      <button className="">Back to top</button>
    </div>
  );
});
