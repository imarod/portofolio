import AOS  from "aos"
import "aos/dist/aos.css";
import React, {useEffect} from "react";

const Skills = () => {
    return (
        <div>
            <section
          id="skills"
          className="container mb-24 mt-40 relative z-10 max-w-4xl w-full justify-center items-center mx-auto" data-aos="fade-up"
        >
          <h1 className="mb-8 font-space-mono text-white text-4xl lg:text-5xl font-bold text-center relative" data-aos="fade-up">
            &lt; Skills/&gt;
          </h1>

          {/* Grid layout for responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Card 1 */}
            <div className="flex flex-col justify-between group border border-[#30363d] relative rounded-3xl p-8 bg-[#13131a] hover:bg-[#1a1a23] hover:scale-105 transition-all duration-300 ease-in-out h-full text-left">
              <div className="text-white  pb-4 ">
                <h1 className="text-3xl font-bold mb-4">Programming</h1>
                <ol className="text-left space-y-2">
                  <li>React</li>
                  <li>Laravel</li>
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>MySQL</li>
                  <li>PHP</li>
                </ol>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between  group border border-[#30363d] relative rounded-3xl p-8 bg-[#13131a] hover:bg-[#1a1a23] hover:scale-105 transition-all duration-300 ease-in-out h-full ">
              <div className="text-white ">
                <h1 className="text-3xl font-bold mb-4">Soft Skills</h1>
                <ol className="text-left space-y-2">
                  <li>Team Work</li>
                  <li>Adaptability</li>
                  <li>Analytical Thinking</li>
                  <li>Interpersonal Skill</li>
                  <li>Creativity</li>
                </ol>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-between  group border border-[#30363d] relative rounded-3xl p-8 bg-[#13131a] hover:bg-[#1a1a23] hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="text-white ">
                <h1 className="text-3xl font-bold mb-4">Tools</h1>
                <ol className=" space-y-2">
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Skills