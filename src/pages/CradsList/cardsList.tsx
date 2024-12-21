import React, { useEffect, useRef, useState, useCallback } from "react";
import * as S from "./cardsList.styles";

export const CardsList = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [columnGap, setColumnGap] = useState(0);

  const updateColumnGap = useCallback(() => {
    const cardWidth = 300;
    if (contentRef.current) {
      const screenWidth = contentRef.current.offsetWidth;
      const numCardsPerRow = Math.floor(screenWidth / cardWidth);

      if (numCardsPerRow > 1) { 
        const totalCardWidth = numCardsPerRow * cardWidth;
        const remainingSpace = screenWidth - totalCardWidth;
        const newGap = remainingSpace / (numCardsPerRow - 1);
        setColumnGap(newGap);
      } else {
        setColumnGap(0);
      }
    }
  }, []);

  useEffect(() => {
    updateColumnGap();
    window.addEventListener("resize", updateColumnGap);

    return () => {
      window.removeEventListener("resize", updateColumnGap);
    };
  }, [updateColumnGap]);

  return (
    <S.Container>
      <S.Content data-testid="content" ref={contentRef}>
        <S.Titulo>Cards List</S.Titulo>
        <S.CardsList $columnGap={columnGap}>
          {Array.from({ length: 5 }).map((_, index) => (
            <S.Card key={index} />
          ))}
        </S.CardsList>
      </S.Content>
    </S.Container>
  );
};
