import AOS from "aos"
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div>
      <section className="max-w-4xl w-full justify-center items-center mx-auto  " data-aos="fade-up">
        <h1 className="mb-8 font-space-mono text-white text-4xl lg:text-5xl font-bold text-center relative " data-aos="fade-up">
          &lt; About Me /&gt;
        </h1>

        <div className="group border border-[#30363d] relative rounded-3xl  pt-8 bg-[#13131a] hover:bg-[#1a1a23] hover:scale-105 transition-all duration-300 ease-in-out">
          {/* Top left corner */}
          <div className="absolute top-0 left-0 w-24 h-24 ">
            <div className="absolute top-0 left-0 w-1 h-12  transition-all duration-300 group-hover:translate-y-[-30px] group-hover:translate-x-[-30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
            <div className="absolute top-0 left-0 h-1 w-12 transition-all duration-300 group-hover:translate-y-[-30px] group-hover:translate-x-[-30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
          </div>
          <div className="absolute -top-0 -right-0 w-24 h-24">
            <div className="absolute top-0 right-0 w-1 h-12 transition-all duration-300 group-hover:translate-y-[-30px] group-hover:translate-x-[30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
            <div className="absolute top-0 right-0 h-1 w-12 transition-all duration-300 group-hover:translate-y-[-30px] group-hover:translate-x-[30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
          </div>

          {/* Bottom right corner */}
          <div className="absolute -bottom-0 -right-0 w-24 h-24">
            <div className="absolute bottom-0 right-0 w-1 h-12 transition-all duration-300 group-hover:translate-y-[30px] group-hover:translate-x-[30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
            <div className="absolute bottom-0 right-0 h-1 w-12 transition-all duration-300 group-hover:translate-y-[30px] group-hover:translate-x-[30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
          </div>
          <div className="absolute -bottom-0 -left-0 w-24 h-24">
            <div className="absolute bottom-0 left-0 w-1 h-12 transition-all duration-300 group-hover:translate-y-[30px] group-hover:translate-x-[-30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
            <div className="absolute bottom-0 left-0 h-1 w-12 transition-all duration-300 group-hover:translate-y-[30px] group-hover:translate-x-[-30px] group-hover:drop-shadow-[0_0_10px_#D0B4F8] group-hover:bg-[#cb6cf7]"></div>
          </div>



          <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10 pb-8">
            <img
              className="w-32 h-auto md:w-[15rem] md:h-auto mx-auto md:pl-8"
              src="me.png"
              alt="me"
            />
            <div className="flex-[2] text-white text-center px-4 md:pr-8">
              <p className="text-base text-md lg:text-lg mb-6 md:mb-8">
                I have an educational background in Information Technology, complemented by a strong passion for coding
                and proven experience in building web applications. I am a detail-oriented coder, a problem-solving
                thinker, and a collaborative communicator.
              </p>

              <button className="px-6 py-2 text-white bg-[#A208E1] hover:drop-shadow-[0_0_10px_#AB01FF] text-base md:text-lg rounded-md">
              <a
                href="CV_RODHIYATI.pdf"
                download="CV Rodhiyati Mardhiyyah"
              >
                Download CV
              </a>
              </button>
              
            </div>
          </div>

        </div>
      </section>
    </div>
  )

}

export default AboutMe;
