import { X } from "lucide-react";

export default function ContactDrawer({ open, setOpen }) {
  const items = ["FOUNDER", "INVESTOR", "PARTNER", "JOURNALIST", "OTHER"];

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
        className={`px-10 bg-[#dadada] relative fixed top-0 left-0 z-[100] min-h-screen w-[700px] text-black transition-transform duration-500
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6"
        >
          <X size={32} className="cursor-pointer" />
        </button>

        {/* heading and image section */}

        <div className="pt-10 mb-10 ">
          <h6 className="uppercase text-[60px] leading-15">
            <div className="flex items-center gap-4">
              <span>Talk to</span>

              <img
                src="/image/ContactDrawer/contact-image.webp"
                alt="Background-image"
                className="w-38 h-14 object-cover"
              />
              <span>the</span>
            </div>

            <div> foundry team.</div>
          </h6>
        </div>

        {/* item section */}
        <div>
          <h2>I'm a [SELECT]</h2>
          <div className=" flex flex-row gap-12">
            {items.map((item) => (
              <button key={item}>{item}</button>
            ))}
          </div>
        </div>

        {/* form section */}
        <div>
          <form className="flex flex-col gap-4">
            <p className="uppercase">About You</p>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  required
                  className="border-b border-black p-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="lastname"></label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  required
                  className="border-b border-black p-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border-b border-black p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="phone"></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="border-b border-black p-2 w-full"
                />
              </div>
            </div>
            <p className="uppercase">Your business</p>
            <div>
              <div>
                <label htmlFor="yourbusiness"></label>
                <input
                  type="text"
                  id="yourbusiness"
                  name="yourbusiness"
                  placeholder="Business name"
                  required
                  className="border-b border-black p-2 w-full"
                />
              </div>

              <div>
                <label htmlFor="typeofbusiness"></label>
                <input
                  type="text"
                  id="typeofbusiness"
                  name="typeofbusiness"
                  placeholder="Type of business"
                  required
                  className="border-b border-black p-2 w-full"
                />
                <textarea
                  id="message"
                  name="message"
                  // rows={2}
                  required
                  placeholder="Message (Optional)"
                  className="border-b border-black p-2 w-full bg-transparent resize-none outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <input type="checkbox" id="privacy" />

              <label htmlFor="privacy">
                By checking this box I agree to the privacy policy
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
