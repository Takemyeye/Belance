import { useEffect, useRef } from "react";
import { initialCards } from '@/app/data/cards';
import CardUi from "@/app/ui/card";

export default function RightContainer() {
  const loopRef = useRef<HTMLDivElement>(null);
  const speed = 1;

  const duplicatedCards = [...initialCards, ...initialCards, ...initialCards];

  useEffect(() => {
    const container = loopRef.current;
    if (!container) return;

    const cardHeight = 320 + 32;
    const blockHeight = cardHeight * initialCards.length;
    let offset = 0;
    let animationId: number;

    const step = () => {
      offset += speed;

      if (offset >= blockHeight) {
        for (let i = 0; i < initialCards.length; i++) {
          const first = container.children[0];
          if (first) container.appendChild(first);
        }
        offset -= blockHeight;
      }

      container.style.transform = `translateY(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="reg_right_container">
      <img src="/image/reg_template.webp" alt="template" />
      <div className="reg_loop" ref={loopRef}>
        {duplicatedCards.map((card, idx) => (
          <CardUi
            key={`${card.id}-${idx}`}
            title={card.title}
            content={card.content}
            bgColor={card.bgColor}
            badgeColor={card.badgeColor}
            badge={card.badge} 
          />
        ))}
      </div>
    </div>
  );
}
