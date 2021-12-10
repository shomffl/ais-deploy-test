import { VFC, memo } from "react";

import { RecommendButton } from "../atom/RecommendButton";

export const Top: VFC = memo(() => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-gray-500 to-yellow-100">
      <p className="animate-fade-out-down">
        このページはトップページになります。ここはtopページ。
      </p>
      <RecommendButton recommendStyle="italic text-purple-500" />
    </div>
  );
});
