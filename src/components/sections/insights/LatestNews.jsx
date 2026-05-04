"use client";

export default function LatestNews() {
  const news = [
    {
      title:
        "WorldQuant Foundry Chairman, Amir Husain, Speaks at Future Investment Initiative",
      desc: "WorldQuant Foundry Chairman, Amir Husain, Speaks at Future Investment Initiative 2025 on Deep Tech and AI Innovation",
      img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Picture1.jpg?w=2000&h=1503&q=80&auto=format&fit=crop",
      read: "3 min read",
      date: "Apr 16 2026",
    },
    {
      title: "WorldQuant Foundry Appoints Dr. Dmitry Green",
      desc: "WorldQuant Foundry Appoints Dr. Dmitry Green as Senior Quantum Computing Advisor",
      img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/WQF__0015_Advisor_Dmitry-Green.jpg?w=2000&h=2469&q=80&auto=format&fit=crop",
      read: "5 min read",
      date: "Mar 18 2026",
      span: "md:col-span-2",
    },
    {
      title: "WorldQuant Foundry Appoints Dr. Christopher Mason",
      desc: "Senior Healthcare Advisor to Spearhead AI-Driven Healthcare Innovation",
      img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Chris-Mason-hero.jpg?w=2000&h=1242&q=80&auto=format&fit=crop",
      read: "3 min read",
      date: "Jul 20 2025",
    },
    {
      title: "WorldQuant Foundry Congratulates Chairman Amir Husain",
      desc: "Receiving The University of Texas' Presidential Citation Award",
      img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Amir_Husain_Hero.jpg?w=2000&h=1242&q=80&auto=format&fit=crop",
      read: "4 min read",
      date: "Jun 29 2025",
    },
    {
      title: "WorldQuant Foundry Appoints Dr. Dmitry Green",
      desc: "WorldQuant Foundry Appoints Dr. Dmitry Green as Senior Quantum Computing Advisor",
      img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/WQF__0015_Advisor_Dmitry-Green.jpg?w=2000&h=2469&q=80&auto=format&fit=crop",
      read: "5 min read",
      date: "Mar 18 2026",
      span: "md:col-span-2",
    },
    {
      title: "WorldQuant Foundry Appoints Dr. Christopher Mason",
      desc: "Senior Healthcare Advisor to Spearhead AI-Driven Healthcare Innovation",
      img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Chris-Mason-hero.jpg?w=2000&h=1242&q=80&auto=format&fit=crop",
      read: "3 min read",
      date: "Jul 20 2025",
    },
    {
      title: "WorldQuant Foundry Appoints Dr. Christopher Mason",
      desc: "Senior Healthcare Advisor to Spearhead AI-Driven Healthcare Innovation",
      img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Chris-Mason-hero.jpg?w=2000&h=1242&q=80&auto=format&fit=crop",
      read: "3 min read",
      date: "Jul 20 2025",
    },
  ];

  return (
    <section className="px-20  pt-[64px] pb-[176px] md:py-[80px]">
      {/* Heading */}
      <h2 className="h6 border-neural-fog border-b pb-[16px] uppercase">
        Latest News
      </h2>

      {/* Grid */}
      <div className="overflow-hidden">
        <div className="-mt-px grid pb-[80px] md:mx-[-24px] md:grid-cols-4 md:gap-y-[80px]">
          {news.map((item, i) => (
            <div
              key={i}
              className={`border-off-white/20 md:-mt-px md:border-l [&_article]:h-full ${item.span || ""}`}
            >
              <article className="group relative flex flex-col py-[24px] pb-[32px] text-center md:px-[24px] md:pt-[24px] md:pb-[64px]">
                {/* Image */}
                <div className="relative aspect-square w-full overflow-hidden md:aspect-[304/250]">
                  <img
                    src={item.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="h6 mt-[24px] uppercase md:mt-[32px]">
                  <a href="#" className="box-link">
                    {item.title}
                  </a>
                </h3>

                {/* Description */}
                <p className="p3 text-off-white/60 mt-[16px]">{item.desc}</p>

                {/* Meta */}
                <div className="p3-mono text-neural-fog mt-[16px] flex justify-center gap-[12px] leading-none">
                  <span>{item.read}</span>
                  <span className="bg-off-white/20 w-px"></span>
                  <span>{item.date}</span>
                </div>

                {/* Border */}
                <div className="border-off-white/20 pointer-events-none absolute inset-0 border-b md:inset-x-[24px] md:border-y"></div>
              </article>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mx-auto max-w-[260px]">
          <a
            href="#"
            className="group relative flex items-center justify-center h-[40px] px-[20px]"
          >
            <span className="p2-mono text-neural-fog transition-transform duration-300 group-hover:translate-x-[5px]">
              See All Latest News
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ===========================code 2 ====================================
// "use client";

// import { section } from "framer-motion/client";

// export default function LatestNews() {
//   const news = [
//     {
//       title:
//         "WorldQuant Foundry Chairman, Amir Husain, Speaks at Future Investment Initiative",
//       desc: "WorldQuant Foundry Chairman, Amir Husain, Speaks at Future Investment Initiative 2025 on Deep Tech and AI Innovation",
//       img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Picture1.jpg?w=2000&h=1503&q=80&auto=format&fit=crop",
//       read: "3 min read",
//       date: "Apr 16 2026",
//     },
//     {
//       title: "WorldQuant Foundry Appoints Dr. Dmitry Green",
//       desc: "WorldQuant Foundry Appoints Dr. Dmitry Green as Senior Quantum Computing Advisor",
//       img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/WQF__0015_Advisor_Dmitry-Green.jpg?w=2000&h=2469&q=80&auto=format&fit=crop",
//       read: "5 min read",
//       date: "Mar 18 2026",
//       span: "md:col-span-2",
//     },
//     {
//       title: "WorldQuant Foundry Appoints Dr. Christopher Mason",
//       desc: "Senior Healthcare Advisor to Spearhead AI-Driven Healthcare Innovation",
//       img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Chris-Mason-hero.jpg?w=2000&h=1242&q=80&auto=format&fit=crop",
//       read: "3 min read",
//       date: "Jul 20 2025",
//     },
//     {
//       title: "WorldQuant Foundry Congratulates Chairman Amir Husain",
//       desc: "Receiving The University of Texas' Presidential Citation Award",
//       img: "https://worldquant-foundry.transforms.svdcdn.com/production/images/Amir_Husain_Hero.jpg?w=2000&h=1242&q=80&auto=format&fit=crop",
//       read: "4 min read",
//       date: "Jun 29 2025",
//     },
//   ];

//   return (
//     <section>
//       <div>Latet News</div>
//       <div className="w-full border-t border-gray-300"></div>
//       <div>
//         <div>
//           <img src="" alt="" />
//           <p>
//             "WorldQuant Foundry Chairman, Amir Husain, Speaks at Future
//             Investment Initiative",
//           </p>
//         </div>
//         <div></div>
//         <div></div>
//       </div>
//     </section>
//   );
// }
