import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EVENT_SLIDES = [
  { src: "/images/events/Bikers.webp", key: "bikers" },
  { src: "/images/events/camping.webp", key: "camping" },
  { src: "/images/events/gym.webp", key: "gym" },
  { src: "/images/events/hiking.webp", key: "hiking" },
  { src: "/images/events/runing.webp", key: "running" },
];

export default function Events() {
  const { t } = useTranslation();

  return (
    <section id="events" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">{t("events.title")}</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">{t("events.intro")}</p>
        </div>

        <div className="relative -mx-2 px-2 sm:mx-0 sm:px-0">
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            navigation
            pagination={{ clickable: true }}
            watchOverflow
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="events-swiper !pb-14"
          >
            {EVENT_SLIDES.map(({ src, key }) => (
              <SwiperSlide key={key}>
                <div className="relative min-h-[280px] h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-xl overflow-hidden group">
                  <img
                    src={src}
                    alt={t(`events.${key}.alt`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold">
                      {t(`events.${key}.title`)}
                    </h3>

                    <p className="text-zinc-300 text-sm">
                      {t(`events.${key}.place`)}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
