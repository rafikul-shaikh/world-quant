"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function OurPortfolio() {
  const data = [
    {
      title: "Alpha Deal",
      desc: "Private asset analysis, reimagined.",
      color: "#1c412e",
    },
    {
      title: "Edda",
      desc: "Social-first audiobook platform.",
      color: "#5640ff",
    },
    {
      title: "Novyra",
      desc: "Precision oncology matching.",
      color: "#fffebe",
    },
  ];
  return (
    <section className="w-full py-20 bg-black text-white">
      {/* <h2 className="text-center text-3xl mb-10">Our Portfolio</h2> */}
      <div className=" text-center uppercase">
        <h1 className="text-[14px] font-azeret">Our Portfolio</h1>
        <h2 className="mt-4 mb-[24px] md:mb-[32px] text-[30px] leading-8">
          Our companies don't just enter
          <br />
          markets. They define them.
        </h2>
        <button>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            explore our portfolio
          </span>
        </button>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        className="w-full"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="!w-[300px]">
            <div
              className="group relative h-[300px] flex flex-col justify-center items-center text-center border border-white/20 transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: item.color }}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-4 opacity-70">{item.desc}</p>

              <button className="mt-6 px-4 py-2 border border-white opacity-0 group-hover:opacity-100 transition">
                Website
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
