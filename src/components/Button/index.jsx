import React, { memo } from "react";
import style from "./style.module.css";

const index = memo(({ label = "" }) => {
  return (
    <div data-testid="button" className={style.button_style}>
      Hi {label}
    </div>
  );
});

export default index;
