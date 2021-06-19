import React, { memo } from "react";
import Button from "./Button";

const index = memo((props) => {
  return (
    <>
      <Button {...props} />
    </>
  );
});
export default index;
