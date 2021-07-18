import React from "react";
import { Link } from "react-router-dom";
import * as S from "./common/header.style";

const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo />
      </Link>
      <nav>
        <S.Link to="/search/javascript">Search</S.Link>
        <S.Link to="/#how-it-works">How it Works</S.Link>
        <S.Link to="/#about">Abou</S.Link>
      </nav>
    </S.Container>
  );
};
export default Header;
