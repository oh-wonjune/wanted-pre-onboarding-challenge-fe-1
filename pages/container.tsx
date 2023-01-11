import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./components/auth/login";

const container: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
};
export default container;
