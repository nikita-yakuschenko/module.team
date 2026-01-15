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
        "flex items-center justify-center gap-6 sm:gap-8 md:gap-10",
        "collab-badge-container",
        className
      )}
    >
      {/* Первое изображение - Модуль */}
      <a 
        href="https://module.team" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative collab-image-left hover:opacity-90 transition-opacity"
      >
        <Image
          src="/images/module_team_collab.png"
          alt="Модуль"
          width={360}
          height={180}
          className="h-auto w-auto max-h-[150px] sm:max-h-[180px] md:max-h-[210px] object-contain drop-shadow-sm"
          priority
        />
      </a>

      {/* Знак умножения с легкой анимацией */}
      <span 
        className="text-3xl sm:text-4xl md:text-5xl font-light select-none collab-multiply"
        style={{ color: '#000000' }}
      >
        ×
      </span>

      {/* Второе изображение - Авангард Строй */}
      <a 
        href="https://avgst.ru" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative collab-image-right hover:opacity-90 transition-opacity"
      >
        <Image
          src="/images/avgst_collab.png"
          alt="Авангард Строй"
          width={360}
          height={180}
          className="h-auto w-auto max-h-[150px] sm:max-h-[180px] md:max-h-[210px] object-contain drop-shadow-sm"
          priority
        />
      </a>
    </div>
  );
}
