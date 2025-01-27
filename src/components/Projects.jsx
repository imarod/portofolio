import AOS from "aos"
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";
import { projects } from "../data/cards";
import { ChevronLeft, ChevronRight } from "lucide-react"

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-in-out",
            once: false,
        });
    }, []);

    const CounterSlider = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [startX, setStartX] = useState(0);
        const [isDown, setIsDown] = useState(false);
        const sliderRef = useRef(null);

        const handleTouchStart = (e) => {
            setStartX(e.touches[0].clientX);
            setIsDown(true);
        };

        const handleMouseStart = (e) => {
            setStartX(e.clientX);
            setIsDown(true);
        };

        const handleTouchMove = (e) => {
            if (!isDown) return;
            const currentX = e.touches[0].clientX;
            handleSwipe(currentX);
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            const currentX = e.clientX;
            handleSwipe(currentX);
        };

        const handleSwipeEnd = () => {
            setIsDown(false);
        };

        const handleSwipe = (currentX) => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                // minimum swipe distance
                if (diff > 0 && currentSlide < projects.length - 1) {
                    setCurrentSlide((prev) => prev + 1);
                } else if (diff < 0 && currentSlide > 0) {
                    setCurrentSlide((prev) => prev - 1);
                }
                setIsDown(false);
            }
        };

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        };

        const prevSlide = () => {
            setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
        };

        useEffect(() => {
            const slider = sliderRef.current;
            if (!slider) return;

            slider.addEventListener("touchend", handleSwipeEnd);
            slider.addEventListener("mouseup", handleSwipeEnd);
            slider.addEventListener("mouseleave", handleSwipeEnd);

            return () => {
                slider.removeEventListener("touchend", handleSwipeEnd);
                slider.removeEventListener("mouseup", handleSwipeEnd);
                slider.removeEventListener("mouseleave", handleSwipeEnd);
            };
        }, []);
        return (
            <div>
                <section id="projects" className="container mb-24 mt-40 relative z-10  max-w-4xl w-full justify-center items-center mx-auto ">
                    <h1 className="mb-8 font-space-mono text-white text-4xl lg:text-5xl font-bold text-center relative " data-aos="fade-up">
                        &lt; Stuff I've Built /&gt;
                    </h1>

                    <div className="relative " data-aos="fade-up">
                        <button
                            onClick={prevSlide}
                            className="absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-20 left-1/2 -translate-x-[80px] bottom-10  translate-y-12 z-10 hover:text-[#E289FC] text-white rounded-full  transition-all"
                            aria-label="Previous slide"
                            disabled={currentSlide === 0}
                        >
                            <ChevronLeft className="w-8 h-auto cursor-pointer hover:drop-shadow-[0_0_10px_#AB01FF]" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-20 right-1/2 translate-x-[80px] bottom-10 translate-y-12 z-10 hover:text-[#E289FC] text-white rounded-full transition-all"
                            aria-label="Next slide"
                            disabled={currentSlide === projects.length - 1}
                        >
                            <ChevronRight className="w-8 h-auto cursor-pointer hover:drop-shadow-[0_0_10px_#AB01FF]" />
                        </button>

                        <div
                            ref={sliderRef}
                            className="overflow-hidden cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-300"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onMouseDown={handleMouseStart}
                            onMouseMove={handleMouseMove}
                        >
                            <div
                                className="flex transition-transform duration-300 ease-out "
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {projects.map((project, index) => (
                                    <div key={project.id} className="mx-auto w-full flex-shrink-0 ">
                                        <div className="border border-[#30363d] rounded-3xl p-8 hover:bg-[#13131c] transition-colors duration-300 justify-center items-center mx-auto" data-aos="fade-up">
                                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                                <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                                                    <div className="flex items-center gap-3">
                                                        {project.tools.map((tool, index) => (
                                                            <img
                                                            key={index}
                                                            src={tool}
                                                            alt={`Tools ${index + 1}`}
                                                            className="max-h-10 w-auto" 
                                                            />
                                                        ))}
                                                      
                                                    </div>

                                                    <a
                                                        href={project.link}
                                                        target="blank"
                                                        className="inline-flex items-center text-[#E040FF]/95 hover:drop-shadow-[0_0_50px_#AB01FF] transition-colors"
                                                    >
                                                        Demo →
                                                    </a>
                                                </div>

                                                <div className="relative aspect-video rounded-lg overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 mt-6">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-[#E289FC] w-3 h-3 drop-shadow-[0_0_10px_#a855f7]" : "bg-gray-600 hover:bg-gray-500"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );

    }

    return <CounterSlider />;
}

export default Projects;
