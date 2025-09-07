import CardUi from "@/app/ui/card";
import { useEffect, useRef } from "react";
import { initialCards } from '@/app/data/cards';
import SimpleUiCard from "@/app/ui/simpleCard";
import { simpleCards } from "@/app/data/simpleCard";

export default function RightContainer() {
  const loopRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(1.7);

  const duplicatedCards = [...initialCards, ...initialCards, ...initialCards];

  useEffect(() => {
    const container = loopRef.current;
    if (!container) return;

    const cardHeight = 320 + 32;
    const blockHeight = cardHeight * initialCards.length;
    let offset = 0;
    let animationId: number;

    const step = () => {
      offset += speedRef.current;

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

  useEffect(() => {
    const wrapper = containerRef.current;
    const loop = loopRef.current;

    if(!wrapper || !loop) return;

    const handleMouseMove = (e: MouseEvent) => {
      const wrapperRect = wrapper.getBoundingClientRect();

      const wrapperCenterY = wrapperRect.top + wrapperRect.height / 2;
      const dist = Math.abs(e.clientY - wrapperCenterY);

      const maxDist = wrapperRect.height / 2;
      const factor = Math.min(dist / maxDist, 1);

      speedRef.current = 0.6 + factor * 1.7;

      console.log(speedRef.current);
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", () => {
      speedRef.current = 1.7;
    });

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
    };

  }, [])

  return (
    <div className="reg_right_container" ref={containerRef}>
      <div className="reg_simple_cards">
        {simpleCards.map((card, idx) => (
          <SimpleUiCard 
            key={idx}
            icon={card.icon}
            text={card.text}
            description={card.description}
          />
        ))}
      </div>
      <img src="/image/reg_template.webp" alt="template" />
      <div className="reg_loop" ref={loopRef}>
        {duplicatedCards.map((card, idx) => (
          <CardUi
            key={idx}
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
