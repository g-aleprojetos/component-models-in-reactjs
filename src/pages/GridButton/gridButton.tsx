import React, { useRef, useState, useEffect } from "react";
import * as S from "./gridButton.styles";

export const GridButton = () => {
  const numberOfCards = 11;
  const cards = Array.from({ length: numberOfCards });
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [cardsPerRow, setCardsPerRow] = useState<number>(1);
  const containerRef = useRef<HTMLUListElement | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  const updateCardsPerRow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const cardWidth = 300; 
      const newCardsPerRow = Math.floor(containerWidth / cardWidth);
      setCardsPerRow(newCardsPerRow);
    }
  };

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);

    return () => {
      window.removeEventListener("resize", updateCardsPerRow);
    };
  }, []);

 
  const isInLastRow = (index: number) => {
    const totalRows = Math.ceil(numberOfCards / cardsPerRow);
    const cardRow = Math.ceil((index + 1) / cardsPerRow);
    return cardRow === totalRows;
  };

  return (
    <S.Container ref={containerRef}>
      {cards.map((_, index: number) => (
        <S.Card key={index}>
          <S.Button onClick={() => handleButtonClick(index)}>Button</S.Button>
          {activeCardIndex === index && (
            <S.Component
              $top={isInLastRow(index) ? -140 : 140}
      
            >
              <p>Aqui está o card número {index + 1}!</p>
              <p>{isInLastRow(index) ? "(Última linha)" : "(Não está na última linha)"}</p>
            </S.Component>
          )}
        </S.Card>
      ))}
    </S.Container>
  );
};
