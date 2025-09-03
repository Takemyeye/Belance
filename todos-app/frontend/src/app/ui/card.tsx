"use client"

import Link from "next/link";
import ArrowButtonUi from "./arrow_btn";
import "./styles/card.css"

interface CardProps {
  title: string
  bgColor: string;
  content: string
  badge: string[];
  badgeColor: string;
}

export default function CardUi({ title, content, bgColor, badge, badgeColor }: CardProps) {
  return (
    <div className="card">
      <div className="card_container" style={{ backgroundColor: bgColor }}>
        <div className="card_title">
          <h1>{title}</h1>
          <h4>{content}</h4>
        </div>
        <div className="card_block">
          <div className="badge_container">
            {badge.map((text, idx) => (
              <div
                key={idx}
                className="badge"
                style={{ backgroundColor: badgeColor }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card_footer">
        <h2>Explore</h2>
        <Link href="/home">
          <ArrowButtonUi/>
        </Link>
      </div>
    </div>
  )
}
