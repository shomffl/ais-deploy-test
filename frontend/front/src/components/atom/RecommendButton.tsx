import { memo, VFC } from "react";
import { useHistory } from "react-router";

type styleProps = {
  recommendStyle: string;
};

export const RecommendButton: VFC<styleProps> = memo((recommendStyle) => {
  const history = useHistory();
  const RecommendPath = () => {
    history.push("/recommend");
  };

  const style = recommendStyle;
  console.log(recommendStyle);
  console.log(style);

  return (
    //
    <button
      onClick={RecommendPath}
      className={`text-2xl ${recommendStyle.recommendStyle}`}
    >
      Recommend
    </button>
  );
});
