import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Events() {
  return (
    <section id="events" className="py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hero-title text-5xl mb-6">Real World Brotherhood</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Connect with men in your city through real events and meetups.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            720: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <div className="relative h-[420px] w-full rounded-xl overflow-hidden group">
              {/* imagen */}
              <img
                src="/images/events/Bikers.webp"
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
            <div className="relative h-[420px] w-full rounded-xl overflow-hidden group">
              {/* imagen */}
              <img
                src="/images/events/camping.webp"
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
            <div className="relative h-[420px] w-full rounded-xl overflow-hidden group">
              {/* imagen */}
              <img
                src="/images/events/gym.webp"
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
            <div className="relative h-[420px] w-full rounded-xl overflow-hidden group">
              {/* imagen */}
              <img
                src="/images/events/hiking.webp"
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
            <div className="relative h-[420px] w-full rounded-xl overflow-hidden group">
              {/* imagen */}
              <img
                src="/images/events/runing.webp"
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
    </section>
  );
}
