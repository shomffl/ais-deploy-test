import { memo, VFC } from "react";
import { Header } from "../templates/Header";

export const Recommend: VFC = memo(() => {
  return (
    <div className="w-full animate-fade-in-down h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <Header
        recommendStyle="text-white"
        infoStyle="text-white"
        isTop={false}
      />
    </div>
  );
});
