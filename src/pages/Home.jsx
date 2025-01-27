import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div>
      {/* Content Container */}
      <div id="Home" className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-14 min-h-screen w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 min-h-screen">
          {/* Div untuk Teks */}
          <div className="flex-1 justify-center text-center lg:text-left" data-aos="fade-up">
            <h1 className="font-space-mono text-2xl sm:text-4xl md:text-4xl lg:text-5xl mt-8 lg:mt-[-11vh] mb-4 font-bold text-white">
              Hello, I'm <span>Dyah</span>
            </h1>
            <h1 className="text-4xl font-space-mono lg:text-4xl font-bold text-white">
              I'm a{" "}
              <span className="relative text-[#E58FFF]/95 font-space-mono">
                <Typewriter
                  words={["Web Developer", "Tech Enthusiast"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                <span className="absolute inset-0 bg-[#AB01FF]/15 blur-[35px] z-10" />
              </span>
            </h1>
          </div>

          {/* Div untuk Gambar */}
          <div className="flex-1 flex justify-center items-center relative z-10">
            <div className="relative w-[200px] sm:w-[300px] lg:w-[450px]">
              <div className="absolute inset-0 bg-gradient-radial from-[#584DDB]/50 blur-[30px] sm:blur-[50px] scale-110 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-radial from-[#9D54FF]/60 to-[#FB04F5]/90 blur-[30px] sm:blur-[50px] scale-90 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-radial from-[#FFFFFF]/100 blur-[20px] sm:blur-[50px] scale-50 rounded-full"></div>
              <img
                src="h.PNG"
                alt="Tech icons around laptop"
                className="max-w-full h-auto relative z-10 animate-float"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
  `}</style>
      </div>

    </div>
  );
};

export default Home;