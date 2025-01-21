import React, { useEffect } from "react"
import { Typewriter } from "react-simple-typewriter"
import AOS from "aos"
import "aos/dist/aos.css"
import "./../style/background.css"

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    })
  }, [])

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden pl-9 pr-9 animated-gradient"
      style={{
        backgroundColor: "#0D1117",
      }}
    >
      {/* Content Container */}
      <div id="Home" className="relative z-10 container mx-auto px-24 min-h-screen w-full">
        <div className="flex lg:flex-row items-center justify-center gap-16 min-h-screen">
          {/* Div untuk Teks */}
          <div className="flex-1 justify-center items-center" data-aos="fade-up">
            <h1 className="text-4xl mt-[-11vh] mb-4 font-bold font-poppins text-white">
              Hello, I'm <span className="">Dyah</span>
            </h1>
            <h1 className="text-5xl justify-center item-center font-poppins font-bold text-white">
              I'm a{" "}
              <span className="text-5xl text-[#ff78ff] relative">
                <Typewriter
                  words={["Web Developer", "Tech Enthusiast"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                <span className="absolute inset-0 bg-[#8E45F6]/30 blur-[50px] z-10" />
              </span>
            </h1>
          </div>

          {/* Image container with glow */}
          <div className="flex-1 flex justify-center items-center relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#584DDB]/90 blur-[50px] scale-110 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-radial from-[#9D54FF]/90 to-[#8E45F6]/90 blur-[60px] scale-75 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-radial from-[#FFFFFF]/90 blur-[55px] scale-50 rounded-full"></div>
              <img
                src="h.PNG"
                alt="Tech icons around laptop"
                className="max-w-full h-auto relative z-10 animate-float w-120"
              />
            </div>
          </div>

          {/* Add floating animation */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            .animate-float { animation: float 6s ease-in-out infinite; }
          `}</style>
        </div>

        <div className="flex pr-56 pl-56" data-aos="fade-up">
          <div className="group border-1 border-opacity-2 relative rounded-xl  pt-8 bg-white/10 bg-opacity-2 backdrop-filter backdrop-blur-lg hover:scale-105 transition-all duration-300 ease-in-out">
            {/* Top left corner */}
            <div className="absolute -top-0 -left-0 w-24 h-24">
              <div className="absolute top-0 left-0 w-2 h-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[-20px] group-hover:translate-x-[-20px]"></div>
              <div className="absolute top-0 left-0 h-2 w-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[-20px] group-hover:translate-x-[-20px]"></div>
            </div>

            {/* Bottom right corner */}
            <div className="absolute -bottom-0 -right-0 w-24 h-24">
              <div className="absolute bottom-0 right-0 w-2 h-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[20px] group-hover:translate-x-[20px]"></div>
              <div className="absolute bottom-0 right-0 h-2 w-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[20px] group-hover:translate-x-[20px]"></div>
            </div>

            <h3 className="mb-8 text-white text-2xl font-bold text-center relative z-10">About Me</h3>

            <div className="flex justify-center items-center gap-8 relative z-10 pb-8">
              <img className="w-[15rem] h-auto pl-8 " src="mee.png" alt="me" />
              <div className="flex-[2]">
                <p className="text-white text-center pr-8">
                  I have an educational background in Information Technology, complemented by a strong passion for coding
                  and proven experience in building web applications. I am a detail-oriented coder, a problem-solving
                  thinker, and a collaborative communicator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="projects" className="container mt-40 mx-auto px-8 relative z-10">
        
      <h1 className="mb-16 text-white text-5xl font-bold text-center relative drop-shadow-[0_0_10px_#C39EE6]" data-aos="fade-up">
      &lt; Stuff I've Built /&gt;
        </h1>
        <div className="grid grid-cols-2 gap-12 auto-rows-[300px] rounded-lg p-16 backdrop-blur-md bg-black/10 relative z-10">
        
          {/* Box 1 */}
          <div className="bg-white rounded-lg relative overflow-hidden group" data-aos="fade-up">
            <img src="1.png" alt="project" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center h-[50px] transition-all duration-300 ease-in-out group-hover:h-[200px] will-change-transform will-change-opacity">
              <p className="text-white px-4 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Helheim: A mystical texture pack hdsjdhjshdjhsjdhjshdjsdgshdghsgdhgshdgshdhsdgsfdgfgfgsdfgsfd
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Download
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-blue-200 rounded-lg relative overflow-hidden group" data-aos="fade-up">
            <img src="2.png" alt="project" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center h-[50px] transition-all duration-300 ease-in-out group-hover:h-[200px] will-change-transform will-change-opacity">
              <p className="text-white px-4 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Helheim: A mystical texture pack hdsjdhjshdjhsjdhjshdjsdgshdghsgdhgshdgshdhsdgsfdgfgfgsdfgsfd
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Download
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#2A2048] rounded-lg relative overflow-hidden group" data-aos="fade-up"></div>

          {/* Box 4 */}
          <div className="bg-[#2A2048] rounded-lg relative overflow-hidden group" data-aos="fade-up">
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center h-[50px] transition-all duration-300 ease-in-out group-hover:h-[200px] will-change-transform will-change-opacity">
              <p className="text-white px-4 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Helheim: A mystical texture pack hdsjdhjshdjhsjdhjshdjsdgshdghsgdhgshdgshdhsdgsfdgfgfgsdfgsfd
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Download
              </button>
            </div>
          </div>

          {/* Box 5 */}
          <div className="bg-[#351758] rounded-lg relative overflow-hidden group" data-aos="fade-up"></div>

          {/* Box 6 */}
          <div className="bg-[#351758] rounded-lg relative overflow-hidden group" data-aos="fade-up"></div>
        </div>
      </section>
    </div>
  )
}

export default Home

