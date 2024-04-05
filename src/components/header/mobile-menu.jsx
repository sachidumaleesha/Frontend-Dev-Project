import React, { useEffect } from "react";
import { X } from "lucide-react";

const MobileMenu = ({ toggleMobileMenu }) => {
  useEffect(() => {
    // Disable scrolling on the body when the menu is open
    document.body.style.overflow = "hidden";

    // unmount the component
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-white relative px-5 py-10 w-full min-h-screen">
      <div className="absolute top-5 right-5">
        <X className="w-7 h-7 cursor-pointer" onClick={toggleMobileMenu} />
      </div>
      <div className="flex flex-col gap-7">
        <p className="tracking-wide font-semibold cursor-pointer">HOME</p>
        <p className="tracking-wide font-semibold cursor-pointer">SERVICES</p>
        <p className="tracking-wide font-semibold cursor-pointer">ABOUT US</p>
        <p className="tracking-wide font-semibold cursor-pointer">CONTACT US</p>
        <p className="tracking-wide font-semibold cursor-pointer">CAREERS</p>
      </div>
    </div>
  );
};

export default MobileMenu;
