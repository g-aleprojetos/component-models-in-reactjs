import React from "react";
import * as S from "./grid.styles";

export const Grid = () => {
  const numberOfCards = 11;
  const cards = Array.from({ length: numberOfCards });

  return (
    <S.Container>
      {cards.map((_, index) => (
          <S.Card  key={index}/>
      ))}
    </S.Container>
  );
};
