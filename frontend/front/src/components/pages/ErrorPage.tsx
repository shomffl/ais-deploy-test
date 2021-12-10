import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

import Image from "../Image/404.png";
import { Button } from "../atom/Button";

export const ErrorPage: VFC = memo(() => {
  const history = useHistory();
  const BackToTop = useCallback(() => history.push("/"), [history]);
  return (
    <div
      className="h-screen 
                 bg-gradient-to-br 
                 from-red-200 
                 to-red-600 
                 w-full 
                 text-center 
                 animate-fade-in-up"
    >
      <p className="text-8xl  pt-16 italic text-white">Page Not found !!</p>
      <img
        src={Image}
        alt="404image"
        className="mx-auto object-contain w-1/2 pt-32 animate-bounce"
      />
      <Button RedirectPath={BackToTop}>Back to Top</Button>
    </div>
  );
});
