export default function Contact({ open, setOpen }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[90]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-[100] min-h-screen w-[700px] bg-white text-black transition-transform duration-500
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button onClick={() => setOpen(false)}>Close</button>
        <h2>Contact Panel</h2>
      </div>
    </>
  );
}
