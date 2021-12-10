import { memo, VFC } from "react";

import { InfoButton } from "../atom/InfoButton";
import { RecommendButton } from "../atom/RecommendButton";

import Logo from "../Image/Logo.png";

type HeaderProps = {
  recommendStyle: string;
  infoStyle: string;
};

export const Header: VFC<HeaderProps> = memo((props) => {
  const { recommendStyle, infoStyle } = props;

  return (
    <div className="flex h-20 animate-fade-in-up">
      <div className="justify-start w-3/4 pl-16">
        <img src={Logo} alt="logo" className="h-20 animate-fade-in-up" />
      </div>
      <div className="justify-end w-1/4 pt-7">
        <RecommendButton recommendStyle={recommendStyle} />
        <InfoButton infoStyle={infoStyle} />
      </div>
    </div>
  );
});
