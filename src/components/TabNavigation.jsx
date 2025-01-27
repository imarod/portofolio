import React, { useState } from "react";

const TabNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk scroll ke elemen dengan ID tertentu
  const handleTabClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Tutup menu setelah klik
  };

  return (
    <nav className="bg-[#0D1117] p-8 fixed top-0 w-full z-50">
      {/* Desktop Navigation */}
      <div className="flex justify-between px-14 ">
        <h1 className="hidden text-white/95 drop-shadow-[0_0_1px_#AB01FF] font-bold text-3xl md:block">Portofolio</h1>
        <div className="hidden md:flex justify-center space-x-8">
          <button
            onClick={() => handleTabClick("Home")}
            className="text-white font-bold hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
          >
            Home
          </button>
          <button
            onClick={() => handleTabClick("About")}
            className="text-white font-bold hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
          >
            About
          </button>
          <button
            onClick={() => handleTabClick("Projects")}
            className="text-white font-bold hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
          >
            Projects
          </button>
          <button
            onClick={() => handleTabClick("Skills")}
            className="text-white font-bold hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
          >
            Skills
          </button>
          <button
            onClick={() => handleTabClick("Contact")}
            className="text-white font-bold hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
          >
            Contact
          </button>
        </div>
      </div>


      {/* Mobile Navigation */}
      <div className="flex items-center justify-between md:hidden">
      <h1 className="block text-white/95 drop-shadow-[0_0_1px_#AB01FF] font-bold text-3xl lg:hidden">Portofolio</h1>
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <ul className="bg-[#13131A] flex-col items-center space-y-4 mt-4 md:hidden">
          <li>
            <button
              onClick={() => handleTabClick("Home")}
              className="text-white  hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("About")}
              className="text-white hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Projects")}
              className="text-white hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Skills")}
              className="text-white hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabClick("Contact")}
              className="text-white hover:text-[#D681F4] hover:drop-shadow-[0_0_5px_#AB01FF]"
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default TabNavigation;
