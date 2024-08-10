import React, { useEffect } from "react";
import "./DragAndDrop.css";


export const DragAndDrop = () => {
  useEffect(() => {
    const columns = document.querySelectorAll(".column");

    const handleDragStart = (e: Event) => {
      const target = e.target as HTMLElement;
      target.classList.add("dragging");
    };

    const handleDragEnd = (e: Event) => {
      const target = e.target as HTMLElement;
      target.classList.remove("dragging");
    };

    const handleDragOver = (column: Element) => (e: Event) => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging") as HTMLElement;
      const applyAfter = getNewPosition(column, (e as DragEvent).clientY);

      if (applyAfter) {
        applyAfter.insertAdjacentElement("afterend", dragging);
      } else {
        column.prepend(dragging);
      }
    };

    const getNewPosition = (column: Element, posY: number) => {
      const cards = column.querySelectorAll(".item:not(.dragging)");
      let result: Element | null = null;
      for (let i = 0; i < cards.length; i++) {
        const refer_card = cards[i] as HTMLElement;
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;
        if (posY >= boxCenterY) {
          result = refer_card;
        }
      }
      return result;
    };

    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("dragend", handleDragEnd);

    columns.forEach((column) => {
      column.addEventListener("dragover", handleDragOver(column));
    });

    return () => {
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("dragend", handleDragEnd);
      columns.forEach((column) => {
        column.removeEventListener("dragover", handleDragOver(column));
      });
    };
  }, []);

  return (
    <div className="kanban">
      <div className="column">
        <div className="item" draggable="true">
          Card 01
        </div>
        <div className="item" draggable="true">
          Card 02
        </div>
      </div>
      <div className="column">
        <div className="item" draggable="true">
          Card 03
        </div>
        <div className="item" draggable="true">
          Card 04
        </div>
      </div>
      <div className="column">
        <div className="item" draggable="true">
          Card 05
        </div>
        <div className="item" draggable="true">
          Card 06
        </div>
      </div>
      <div className="column">
        <div className="item" draggable="true">
          Card 07
        </div>
        <div className="item" draggable="true">
          Card 08
        </div>
      </div>
    </div>
  );
};


