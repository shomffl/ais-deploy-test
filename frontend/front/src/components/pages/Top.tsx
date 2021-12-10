import { VFC, memo } from "react";

import { Header } from "../templates/Header";
import TopImage from "../Image/TopImage.png";

export const Top: VFC = memo(() => {
  return (
    <div className="h-screen w-full bg-gray-300">
      <Header recommendStyle="text-blue-500" infoStyle="text-blue-500" />
      <div className="flex">
        <div className="w-7/12">
          <img
            src={TopImage}
            alt="topimage"
            className="object-fit animate-fade-in-up w-full"
          />
        </div>
        <div className="inline w-5/12">
          <p className="text-8xl italic text-center pr-16 pt-32 font-bold text-blue-500 animate-fade-in-up">
            AI × Library
          </p>
          <p className="text-2xl text-left pt-16 text-blue-500 animate-fade-in-up">
            This is the site that you can find your new book to read. which is
            releted to today’s news by useing machine learning.
          </p>
          <p className="text-2xl text-left pt-8 text-blue-500 animate-fade-in-up">
            have fan to find your new book!
          </p>
        </div>
      </div>
    </div>
  );
});
