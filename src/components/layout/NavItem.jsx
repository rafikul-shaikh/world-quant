"use client";

export default function NavItem({ label, isActive, onMouseEnter }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`px-3 py-1 text-xs tracking-widest uppercase transition-colors
        ${isActive ? "text-white" : "text-gray-400"}
      `}
    >
      {label}
    </div>
  );
}
