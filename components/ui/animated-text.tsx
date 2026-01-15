"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  items: string[];
  interval?: number;
  className?: string;
}

// Яркие, приятные, глубокие цвета для каждого элемента - 4 абсолютно разных цвета
const itemColors: Record<string, string> = {
  ".Пульс": "text-[#FF6B6B]", // Яркий кораллово-красный
  ".Поток": "text-[#4A90E2]", // Глубокий синий
  ".Визор": "text-[#50C878]", // Насыщенный зеленый
  ".План": "text-[#9B59B6]", // Глубокий фиолетовый
};

export function AnimatedText({ items, interval = 3000, className }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    setNextIndex((currentIndex + 1) % items.length);
  }, [currentIndex, items.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 700);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  // Находим самое длинное слово для фиксированной ширины
  const maxLength = Math.max(...items.map(item => item.length));

  return (
    <span 
      className={cn("inline-flex items-baseline relative overflow-hidden", className)}
      style={{ minWidth: `${maxLength}ch`, display: 'inline-flex' }}
    >
      {/* Текущее слово - уходит наверх */}
      <span
        key={`current-${currentIndex}`}
        className={cn(
          "inline-block transition-all duration-700 ease-in-out text-left w-full absolute",
          itemColors[items[currentIndex]] || "text-primary",
          isAnimating ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        )}
      >
        {items[currentIndex]}
      </span>
      {/* Следующее слово - появляется снизу */}
      <span
        key={`next-${nextIndex}`}
        className={cn(
          "inline-block transition-all duration-700 ease-in-out text-left w-full",
          itemColors[items[nextIndex]] || "text-primary",
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        )}
      >
        {items[nextIndex]}
      </span>
    </span>
  );
}
