import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links array
  const links = [
    { id: 1, url: "/services", text: "Services" },
    { id: 2, url: "/work", text: "Work" },
    { id: 3, url: "/process", text: "Process" },
    { id: 4, url: "/about", text: "About" },
    { id: 5, url: "/careers", text: "Careers" },
    { id: 5, url: "/contactPage", text: "Contact Us" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-white rounded-md shadow-md"
      >
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          tabIndex={0} // Allows the element to gain focus
          onBlur={() => setIsOpen(false)} // Closes menu when it loses focus
          className="absolute -left-40 top-10 w-52 mt-2 bg-green-900 z-[50] text-white rounded-lg shadow-lg"
        >
          <ul className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
