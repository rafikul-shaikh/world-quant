import { Children } from "react";

export default function Button({
  children,
  className = "",
  textColor = "text-white",
  bgColor = "bg-white",
  borderColor = "border-white",
}) {
  return (
    <a
      href="https://www.worldquantfoundry.com/portfolio"
      className={`${className} group relative isolate inline-block hover:animate-glitch-hover motion-reduce:hover:animate-none`}
    >
      <div className="px-[20px] py-[10px]">
        {/* DOT */}
        <div
          className={`${bgColor} button--dot size-[10px] -translate-x-[24px] rounded-[3px] opacity-0 blur-[20px] transition-all duration-400 ease-in-out group-hover:-translate-x-[5px] group-hover:opacity-100 group-hover:blur-0`}
        />

        {/* TEXT */}
        <div
          className={`${textColor} p2-mono relative isolate flex -translate-x-[5px] overflow-hidden transition-transform duration-400 ease-in-out group-hover:translate-x-[5px]`}
        >
          <span className=" text-[12px] uppercase transition-transform duration-400 ease-in-out group-hover:-translate-y-full">
            {children}
          </span>

          <span className="absolute inset-0 text-[12px] uppercase translate-y-full transition-transform duration-400 ease-in-out group-hover:translate-y-0">
            {children}
          </span>
        </div>
      </div>

      {/* CORNER  */}

      <div
        className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${borderColor}`}
      />
      <div
        className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${borderColor}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${borderColor}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${borderColor}`}
      />
    </a>
  );
}
