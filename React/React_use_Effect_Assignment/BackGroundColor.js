import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const DynamicBg = () => {
  useEffect(() => {
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
      div.style.backgroundColor = "black";
      div.style.color = "white";
    });
    return () => {
      divs.forEach((div) => {
        div.style.backgroundColor = "white";
        div.style.color = "black";
      });
    };
  }, []);

  return (
    <div>
      <h2>Background Color is now black</h2>
    </div>
  );
};

const BackgroundColorChanger = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  return (
    <div >
      <h1>17. Changing Styles Dynamically</h1>
      <Button variant="contained" onClick={() => setIsComponentVisible(!isComponentVisible)}>
        {isComponentVisible ? "Unmount" : "Mount"}
      </Button>
      {isComponentVisible && <DynamicBg />}
      {!isComponentVisible && <h2>Background Color is now White</h2>}
    </div>
  );
};

export default BackgroundColorChanger;
