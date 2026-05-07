import { X } from "lucide-react";
import Button from "../sections/ui/Button";
import { useEffect } from "react";

export default function ContactDrawer({ open, setOpen }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const items = ["FOUNDER", "INVESTOR", "PARTNER", "JOURNALIST", "OTHER"];

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-[90]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-[100] h-screen overflow-y-auto hide-scrollbar w-full max-w-[700px] bg-[#dadada] text-black  px-12 py-10  rounded-r-[20px] 
           shadow-2xl  transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4"
        >
          <X size={28} className="cursor-pointer" />
        </button>

        {/* heading and image section */}

        <div className=" mb-10 ">
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
          <h2 className="text-[11px] font-azeret uppercase">
            I'm a <span className="text-gray-500">[SELECT]</span>
          </h2>
          <div className=" mt-4  flex flex-row gap-12">
            {items.map((item) => (
              <button key={item}>{item}</button>
            ))}
          </div>
        </div>

        {/* form section */}
        <div className="pt-10 pb-20 ">
          <form className=" text-[14px] flex flex-col gap-4">
            <p className="text-[11px] uppercase">About You</p>
            <div className="mb-6 grid grid-cols-2 gap-4 ">
              <div>
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  required
                  className="border-b border-black p-2 w-full focus:outline-none"
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
                  className="border-b border-black p-2 w-full focus:outline-none"
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
                  className="border-b border-black p-2 w-full focus:outline-none"
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
                  className="border-b border-black p-2 w-full focus:outline-none"
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
                  className="border-b border-black p-2 w-full focus:outline-none"
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
                  className="border-b border-black p-2 w-full focus:outline-none"
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message (Optional)"
                  className="border-b border-black p-2 w-full bg-transparent resize-none focus:outline-none"
                />
              </div>
            </div>
            <div className="text-gray-500 uppercase flex flex-row gap-1">
              <input type="checkbox" id="privacy" required />

              <label htmlFor="privacy">
                By checking this box I agree to the{" "}
                <span className="text-black underline">privacy policy</span>
              </label>
            </div>
            <div>
              <Button
                padding="px-7 py-3"
                textColor="text-black/80"
                bgColor="bg-black"
                borderColor="border-black"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
