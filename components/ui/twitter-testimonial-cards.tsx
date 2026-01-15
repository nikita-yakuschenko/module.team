"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Utility function if cn is not available
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";
// function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

interface TestimonialCardProps {
  className?: string;
  avatar?: string;
  username?: string;
  handle?: string;
  content?: string;
  date?: string;
  verified?: boolean;
  likes?: number;
  retweets?: number;
  tweetUrl?: string;
  onHover?: () => void;
  onLeave?: () => void;
  isActive?: boolean;
  onTap?: () => void;
}

function VerifiedBadge() {
  return (
    <svg
      className="size-4 text-[#1d9bf0]"
      viewBox="0 0 22 22"
      fill="currentColor"
    >
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
    </svg>
  );
}

function TestimonialCard({
  className,
  avatar,
  username = "PEPE",
  handle = "@PEPE_bigbrother",
  content = "This is amazing! 🔥 Absolutely loving what the team is building here. Can't wait to see what comes next!",
  date = "Jan 5, 2026",
  verified = true,
  likes = 142,
  retweets = 23,
  tweetUrl,
  onHover,
  onLeave,
  isActive,
  onTap,
}: TestimonialCardProps) {
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      // On mobile: first tap activates, second tap navigates
      if (!isActive) {
        e.preventDefault();
        onTap?.();
      }
      // If already active, let the link navigate normally
    }
    // On desktop: always navigate (normal link behavior)
  };

  return (
    <a
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "relative flex h-auto min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] -skew-y-[5deg] sm:-skew-y-[6deg] md:-skew-y-[8deg] select-none flex-col rounded-lg sm:rounded-xl md:rounded-2xl border border-border bg-card/90 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 transition-all duration-500 hover:border-border/80 hover:bg-card active:scale-[0.98] cursor-pointer touch-manipulation",
        "dark:after:absolute dark:after:-right-1 dark:after:top-[-5%] dark:after:h-[110%] dark:after:w-[20rem] dark:after:bg-linear-to-l dark:after:from-background dark:after:to-transparent dark:after:content-[''] dark:after:pointer-events-none",
        isActive && "ring-2 ring-primary/50",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
        <div className="size-7 sm:size-8 md:size-10 lg:size-12 rounded-full bg-transparent flex items-center justify-center overflow-hidden shrink-0 border border-gray-300/30">
          {avatar ? (
            <img src={avatar} alt={username} className="w-full h-full object-cover" />
          ) : (
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl">🐸</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-0.5 sm:gap-1">
            <span className="font-bold text-foreground truncate text-[10px] sm:text-xs md:text-sm lg:text-base">{username}</span>
            {verified && <VerifiedBadge />}
          </div>
          <span className="text-muted-foreground text-[9px] sm:text-[10px] md:text-xs lg:text-sm truncate block">{handle}</span>
        </div>
      </div>

      {/* Content */}
      <p className="text-foreground text-[11px] sm:text-xs md:text-sm lg:text-[15px] leading-relaxed mb-1.5 sm:mb-2 md:mb-3 line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
        {content}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-muted-foreground text-[9px] sm:text-[10px] md:text-xs lg:text-sm mt-auto">
        <span className="truncate">{date}</span>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
          <div className="flex items-center gap-0.5 sm:gap-1">
            <svg className="size-3 sm:size-3.5 md:size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-0.5 sm:gap-1">
            <svg className="size-3 sm:size-3.5 md:size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <span>{retweets}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

interface TestimonialsProps {
  cards?: TestimonialCardProps[];
}

export default function Testimonials({ cards }: TestimonialsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getCardClassName = (index: number, baseClassName: string) => {
    // When hovering/active on back card (0), push middle (1) and front (2) down
    // When hovering/active on middle card (1), push front (2) down
    // Уменьшаем смещения на мобильных устройствах
    const focusedIndex = hoveredIndex ?? activeIndex;
    
    if (focusedIndex === 0 && index === 1) {
      return baseClassName + " !translate-y-6 sm:!translate-y-10 md:!translate-y-16 lg:!translate-y-24 xl:!translate-y-32 !translate-x-4 sm:!translate-x-6 md:!translate-x-10 lg:!translate-x-16 xl:!translate-x-24";
    }
    if (focusedIndex === 0 && index === 2) {
      return baseClassName + " !translate-y-8 sm:!translate-y-12 md:!translate-y-20 lg:!translate-y-32 xl:!translate-y-44 !translate-x-6 sm:!translate-x-8 md:!translate-x-14 lg:!translate-x-24 xl:!translate-x-40";
    }
    if (focusedIndex === 1 && index === 2) {
      return baseClassName + " !translate-y-8 sm:!translate-y-12 md:!translate-y-18 lg:!translate-y-28 xl:!translate-y-40 !translate-x-6 sm:!translate-x-8 md:!translate-x-14 lg:!translate-x-24 xl:!translate-x-40";
    }
    return baseClassName;
  };

  const handleTap = (index: number) => {
    if (activeIndex === index) {
      // Already active, will navigate on next tap
      return;
    }
    setActiveIndex(index);
  };

  const defaultCards: TestimonialCardProps[] = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      username: "Sarah Chen",
      handle: "@sarahchen",
      content: "This component is exactly what I needed for my landing page. The stacked effect is beautiful! 🎨",
      date: "Jan 3, 2026",
      verified: true,
      likes: 42,
      retweets: 8,
      tweetUrl: "https://x.com",
    },
    {
      className:
        "[grid-area:stack] translate-x-8 sm:translate-x-16 translate-y-6 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      username: "Mike Johnson",
      handle: "@mikej_dev",
      content: "The hover interactions are so smooth. Love how the cards spread apart to reveal the ones behind. Great UX thinking!",
      date: "Jan 2, 2026",
      verified: true,
      likes: 28,
      retweets: 5,
      tweetUrl: "https://x.com",
    },
    {
      className: "[grid-area:stack] translate-x-16 sm:translate-x-32 translate-y-12 sm:translate-y-20 hover:translate-y-6 sm:hover:translate-y-10",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      username: "Alex Rivera",
      handle: "@alexrivera",
      content: "Finally a testimonial component that looks native to Twitter/X! Dark mode support is chef's kiss 👨‍🍳",
      date: "Jan 1, 2026",
      verified: true,
      likes: 156,
      retweets: 23,
      tweetUrl: "https://x.com",
    },
  ];

  const displayCards = cards || defaultCards;

  // Компенсируем горизонтальное смещение карточек для центрирования стопки
  // Смещаем влево, так как стопка была правее оси
  // На мобильных не смещаем, чтобы не выходить за края
  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center items-center justify-items-center opacity-100 animate-in fade-in-0 duration-700 translate-x-0 sm:-translate-x-3 md:-translate-x-6 lg:-translate-x-10 xl:-translate-x-14 overflow-visible">
      {displayCards.map((cardProps, index) => (
        <TestimonialCard
          key={index}
          {...cardProps}
          className={getCardClassName(index, cardProps.className || "")}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
          isActive={activeIndex === index}
          onTap={() => handleTap(index)}
        />
      ))}
    </div>
  );
}

// Demo component for 21st.dev
function Component() {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center bg-background p-8">
      <Testimonials />
    </div>
  );
}

export { TestimonialCard, Testimonials, Component };
export type { TestimonialCardProps, TestimonialsProps };
