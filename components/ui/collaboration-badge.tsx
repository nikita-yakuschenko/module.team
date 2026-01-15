"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CollaborationBadgeProps {
  className?: string;
}

export function CollaborationBadge({ className }: CollaborationBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1.5 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-10 flex-wrap px-2 w-full max-w-full",
        "collab-badge-container",
        className
      )}
    >
      {/* Первое изображение - Модуль  */}
      <a 
        href="https://module.team" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative collab-image-left hover:opacity-90 active:opacity-75 transition-opacity touch-manipulation"
      >
        <Image
          src="/images/module_team_collab.png"
          alt="Модуль"
          width={360}
          height={180}
          className="h-auto w-auto max-h-[50px] sm:max-h-[70px] md:max-h-[100px] lg:max-h-[120px] xl:max-h-[150px] 2xl:max-h-[180px] max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] object-contain drop-shadow-sm"
          priority
        />
      </a>

      {/* Знак умножения с легкой анимацией */}
      <span 
        className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light select-none collab-multiply shrink-0"
        style={{ color: '#000000' }}
      >
        ×
      </span>

      {/* Второе изображение - Авангард Строй */}
      <a 
        href="https://avgst.ru" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative collab-image-right hover:opacity-90 active:opacity-75 transition-opacity touch-manipulation"
      >
        <Image
          src="/images/avgst_collab.png"
          alt="Авангард Строй"
          width={360}
          height={180}
          className="h-auto w-auto max-h-[50px] sm:max-h-[70px] md:max-h-[100px] lg:max-h-[120px] xl:max-h-[150px] 2xl:max-h-[180px] max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] object-contain drop-shadow-sm"
          priority
        />
      </a>
    </div>
  );
}
