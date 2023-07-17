import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/theme/themeSlice";

const Theme = () => {
  const themeState = useSelector((state) => state.theme);

  const theme = themeState.theme;  

  const dispatch = useDispatch();

  const oppositeTheme = theme === "light" ? "dark" : "light";
  return (
    <>
      <Button
        variant={`${oppositeTheme}`}
        className="text-uppercase"
        onClick={() => dispatch(toggleTheme())}
      >
        {oppositeTheme}
      </Button>
    </>
  );
};

export default Theme;
