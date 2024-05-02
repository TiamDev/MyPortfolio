import { t } from "i18next";
import React from "react";

const ScrollDown = () => {
  return (
    <div className="scroll__down">
      <span className="home__scroll-name">{t("Scroll Down")}</span>
      <sapn className="mouse">
        <span className="wheel"></span>
      </sapn>
    </div>
  );
};
export default ScrollDown;
