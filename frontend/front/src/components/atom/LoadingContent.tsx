import { memo } from "react";

export const LoadingContent = memo(() => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <div className="pt-40 text-center animate-ping text-white text-size-lg">
        loading...
      </div>
    </div>
  );
});
