import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../style/background.css';


const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 500,
      easing: 'ease-in-out',
      once: false,});
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-hidden pl-9 pr-9 animated-gradient"
      style={{
        background: `
            radial-gradient(circle at 0 0, rgba(147, 51, 234, 0.35) 0%, transparent 30%),
            radial-gradient(circle at 0 100%, rgba(107, 33, 168, 0.35) 0%, transparent 30%),
            linear-gradient(to bottom right, #2e1065 0%, #581c87 100%)
          `,
        backgroundColor: '#2e1065'
      }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(147, 51, 234) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(147, 51, 234) 1px, transparent 1px)
          `,
          backgroundSize: '80px 130px',
        }}
      />

      <div className='absolute-bg inset-0 justify-center'>
        <div className='bg-shape1 bg-teal-bg opacity bg-blur-bg'></div>
        <div className='bg-shape2 bg-primary-bg opacity bg-blur-bg'></div>
        <div className='bg-shape3 bg-purple-bg opacity bg-blur-bg'></div>

      </div>


      {/* Content Container */}
      <div id='Home' className="relative z-10 container mx-auto px-16 py-32 min-h-screen w-full">
        <div className='flex-1 flex flex-col items-center'>
          <h1 className='text-5xl font-bold font-poppins text-white mb-6 lg:mb-12 xl:mb-16'>Hello, I'm <span className=' '>Dyah</span></h1>
          <h1 className="text-6xl font-poppins font-bold text-white mb-40 mb-40 lg:mb-56 xl:mb-72 ">
            I'm a <span className='text-6xl  text-[#f6a75e] '>
              <Typewriter
                words={['Web Developer', 'Tech Enthusiast']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>

          </h1>
          <p className="text-xl font-homemade-apple text-purple-200">get in touch with me</p>
          <button className='text-white px-10 py-2 bg-[#580FD1] rounded-md mt-4 lg:mt-8 xl:mt-12 mb-16 lg:mb-24 xl:mb-32'>Download</button>
        </div>

        <div className='flex mr-40 ml-40 p-16' data-aos="fade-up">
          <div className='group relative rounded-3xl pl-16 pr-16 pb-16 pt-8 bg-black/20 bg-opacity-6 backdrop-filter backdrop-blur-lg hover:scale-105 transition-all duration-300 ease-in-out'>
            {/* Top left corner */}
            <div className='absolute -top-0 -left-0 w-24 h-24'>
              <div className='absolute top-0 left-0 w-2 h-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[-20px] group-hover:translate-x-[-20px]'></div>
              <div className='absolute top-0 left-0 h-2 w-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[-20px] group-hover:translate-x-[-20px]'></div>
            </div>

            {/* Bottom right corner */}
            <div className='absolute -bottom-0 -right-0 w-24 h-24'>
              <div className='absolute bottom-0 right-0 w-2 h-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[20px] group-hover:translate-x-[20px]'></div>
              <div className='absolute bottom-0 right-0 h-2 w-12 bg-[#C39EE6] transition-all duration-300 group-hover:translate-y-[20px] group-hover:translate-x-[20px]'></div>
            </div>

            <h3 className='mb-8 text-white text-2xl font-bold text-center relative z-10'>About Me</h3>

            <div className="flex items-center gap-16 relative z-10">
              <img className="w-40 pl-8 justify-end" src="mee.png" alt="me" />
              <p className="text-purple-200 text-center">
                I have an educational background in Information Technology, complemented by a strong passion for coding and proven experience in building web applications. I am a detail-oriented coder, a problem-solving thinker, and a collaborative communicator.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='projects' className="container mx-auto px-8 relative z-10">
        <h1 className='mb-10 text-white  text-4xl font-bold text-center' data-aos="fade-up">Stuff I've Built</h1>
        <div className="grid grid-cols-2 gap-12 auto-rows-[300px] rounded-lg p-16 backdrop-blur-md bg-black/10">
          {/* Box 1 */}
          <div className="bg-white rounded-lg relative overflow-hidden group" data-aos="fade-up">
            <img src="1.png" alt="project" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center h-[50px] transition-all duration-300 ease-in-out group-hover:h-[200px] will-change-transform will-change-opacity">

              <p className="text-white px-4 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Helheim: A mystical texture pack
                hdsjdhjshdjhsjdhjshdjsdgshdghsgdhgshdgshdhsdgsfdgfgfgsdfgsfd
              </p>

              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Download
              </button>
            </div>


          </div>

          {/* Box 2 */}
          <div className="bg-blue-200  rounded-lg relative overflow-hidden group" data-aos="fade-up">
            <img src="2.png" alt="project" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center h-[50px] transition-all duration-300 ease-in-out group-hover:h-[200px] will-change-transform will-change-opacity">

              <p className="text-white px-4 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Helheim: A mystical texture pack
                hdsjdhjshdjhsjdhjshdjsdgshdghsgdhgshdgshdhsdgsfdgfgfgsdfgsfd
              </p>

              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Download
              </button>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#2A2048] rounded-lg relative overflow-hidden group" data-aos="fade-up">

          </div>


          {/* Box 4 */}
          <div className="bg-[#2A2048] rounded-lg relative overflow-hidden group" data-aos="fade-up">
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center h-[50px] transition-all duration-300 ease-in-out group-hover:h-[200px] will-change-transform will-change-opacity">

              <p className="text-white px-4 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Helheim: A mystical texture pack
                hdsjdhjshdjhsjdhjshdjsdgshdghsgdhgshdgshdhsdgsfdgfgfgsdfgsfd
              </p>

              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                Download
              </button>
            </div>
          </div>

          {/* Box 5 */}
          <div className="bg-[#351758] rounded-lg relative overflow-hidden group" data-aos="fade-up">

          </div>

          {/* Box 6 */}
          <div className="bg-[#351758] rounded-lg relative overflow-hidden group" data-aos="fade-up">

          </div>
        </div>



      </section>


    </div>
  )
}

export default Home
