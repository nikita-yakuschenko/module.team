"use client";

import { Testimonials } from "@/components/ui/twitter-testimonial-cards";
import type { TestimonialCardProps } from "@/components/ui/twitter-testimonial-cards";
import { AnimatedText } from "@/components/ui/animated-text";
import { CollaborationBadge } from "@/components/ui/collaboration-badge";

export default function Home() {
  // Кастомные карточки с русским текстом
  const customCards: TestimonialCardProps[] = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0",
      avatar: "/avatars/izhs.png",
      username: "ИЖС",
      handle: "@izhs.russia",
      content: "Не могу дождаться запуска! Наконец-то начнётся новый этап в развитии рынка ИЖС. Спасибо Авангард Строй и Команде Модуль!",
      date: "15 янв, 2026",
      verified: true,
      likes: 89,
      retweets: 12,
    },
    {
      className:
        "[grid-area:stack] translate-x-8 sm:translate-x-16 translate-y-6 sm:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-2xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0",
        avatar: "/avatars/avgst.png",
        username: "Авангард Строй",
        handle: "@avgst.ru",
        content: "Неужели мы наконец-то сможем навести порядок в процессах и в управлении проектами? Быстрее, Выше, Сильнее! 💫",
        date: "15 янв, 2026",
        verified: true,
        likes: 109,
        retweets: 12,
        tweetUrl: "https://avgst.ru",
    },
    {
      className: "[grid-area:stack] translate-x-16 sm:translate-x-32 translate-y-12 sm:translate-y-20 hover:translate-y-6 sm:hover:translate-y-10",
      avatar: "/avatars/module.team.png",
      username: "Модуль",
      handle: "@module_team",
      content: "Cоздаём семейство программных решений для команды Авангард Строй. Вжарим технологиями по скучному рынку ИЖС 🔥",
      date: "15 янв, 2026",
      verified: true,
      likes: 203,
      retweets: 45,
    },
  ];

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-background via-background to-muted/20 px-4 overflow-hidden relative">
      {/* Блок коллаборации - фиксирован от верхнего края */}
      <div className="absolute top-[100px] left-0 right-0 flex justify-center z-20">
        <CollaborationBadge />
      </div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Заголовок и описание */}
        <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-12 md:mb-16 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground whitespace-nowrap pb-[10px]">
            Мы создаём Модуль
            <AnimatedText
              items={[".Пульс", ".Поток", ".Визор", ".План"]}
              interval={2500}
              className="ml-1"
            />
          </h1>
          
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            С любовью и заботой мы разрабатываем особенное приложение
            <br />
            для команды Авангард Строй
          </p>
        </div>

        {/* Компонент с отзывами */}
        <div className="w-full flex items-center justify-center flex-1 min-h-0 relative z-0">
          <div className="scale-75 sm:scale-90 md:scale-100 flex items-center justify-center">
            <Testimonials cards={customCards} />
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="absolute bottom-[50px] left-0 right-0 flex justify-center z-30 pointer-events-none">
        <p className="text-sm text-foreground/70">
          © module.team
        </p>
      </div>
    </main>
  );
}
