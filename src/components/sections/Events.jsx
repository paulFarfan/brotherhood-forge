import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Events() {
  return (
    <section id="events" className="py-28 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">Real World Brotherhood</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Connect with men in your city through real events and meetups.
          </p>
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
            <SwiperSlide>
              <div className="relative min-h-[280px] h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-xl overflow-hidden group">
                {/* imagen */}
                <img
                  src="/images/events/Bikers.webp"
                  alt="Bikers Brotherhood meetup in New York"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* texto */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold">Bikers Brotherhood</h3>

                  <p className="text-zinc-300 text-sm">New York</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[280px] h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-xl overflow-hidden group">
                {/* imagen */}
                <img
                  src="/images/events/camping.webp"
                  alt="Camping Brotherhood meetup in Mexico"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* texto */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold">Camping Brotherhood</h3>

                  <p className="text-zinc-300 text-sm">Mexico</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[280px] h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-xl overflow-hidden group">
                {/* imagen */}
                <img
                  src="/images/events/gym.webp"
                  alt="Gym Brotherhood meetup in Melbourne"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* texto */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold">Gym Brotherhood</h3>

                  <p className="text-zinc-300 text-sm">Melbourne</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[280px] h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-xl overflow-hidden group">
                {/* imagen */}
                <img
                  src="/images/events/hiking.webp"
                  alt="Hiking Brotherhood meetup in Colombia"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* texto */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold">Hiking Brotherhood</h3>

                  <p className="text-zinc-300 text-sm">Colombia</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative min-h-[280px] h-[320px] sm:h-[380px] md:h-[420px] w-full rounded-xl overflow-hidden group">
                {/* imagen */}
                <img
                  src="/images/events/runing.webp"
                  alt="Running Brotherhood meetup in Chile"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* texto */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold">Runing Brotherhood</h3>

                  <p className="text-zinc-300 text-sm">Chile</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
